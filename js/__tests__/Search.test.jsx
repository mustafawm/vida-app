import React from 'react';
import { shallow } from 'enzyme';

import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

describe('Testing <Search />', () => {
  test('renders correctly', () => {
    const component = shallow(<Search />);

    expect(component).toMatchSnapshot();
  });

  test('should render right amount of shows', () => {
    const component = shallow(<Search />);

    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  test('should render right amount of <ShowCard />s based on searchTerm', () => {
    const component = shallow(<Search />);
    const searchWord = 'black';
    const showCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`
        .toLowerCase()
        .indexOf(searchWord.toLowerCase()) !== -1
    ).length;
    component.find('input').simulate('change', {target: {value: searchWord}});

    expect(component.find(ShowCard).length).toEqual(showCount);
  });
});
