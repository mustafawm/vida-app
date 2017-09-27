import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import { setSearchTerm } from '../actionCreators';
import preload from '../../data.json';
import Search, { UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

describe('Testing <Search />', () => {
  test('renders correctly', () => {
    const component = shallow(<UnwrappedSearch />);

    expect(component).toMatchSnapshot();
  });

  test('renders right amount of shows', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows}/>);

    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  test('renders right amount of <ShowCards/>s given a searchTerm -- w/o Redux', () => {
    const searchWord = 'black';
    const component  = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord}/>);

    const showsCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`
        .toLowerCase()
        .indexOf(searchWord.toLowerCase()) !== -1
    ).length;

    expect(component.find(ShowCard).length).toEqual(showsCount);
  });

  test('renders right amount of <ShowCard />s given a searchTerm -- w Redux', () => {
    const searchWord = 'black';

    store.dispatch(setSearchTerm(searchWord));

    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search shows={preload.shows} searchTerm={searchWord} />
        </MemoryRouter>
      </Provider>
    );

    const showCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`
        .toLowerCase()
        .indexOf(searchWord.toLowerCase()) !== -1
    ).length;

    expect(component.find('.show-card').length).toEqual(showCount);
  });
});
