import moxios from 'moxios';
import { setSearchTerm, setApiData, getShowDetails } from '../actionCreators';

const port = process.env.API_SERVER;
const homeLand = {
  title: 'Homeland',
  year: '2011–',
  description: 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.',
  poster: 'h.jpg',
  imdbID: 'tt1796960',
  trailer: 'KyFmS3wRPCQ',
  rating: '8.5'
};

test('setSearchTerm', () => {
  // expect(setSearchTerm('New York')).toEqual({type: 'SET_SEARCH_TERM', payload: 'New York'});
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('setApiData', () => {
  expect(setApiData(homeLand)).toMatchSnapshot();
});

test('getShowDetails', done => {
  const dispatchMock = jest.fn(); // spy func, mocking redux dispatch
  moxios.withMock(() => {
    const thunk = getShowDetails(homeLand.imdbID); // action returns a thunk
    thunk(dispatchMock); // thunks called with cb (redux passes dispatch in real example)

    // mimic async
    moxios.wait(() => {
      const request = moxios.requests.mostRecent(); // after waiting, get last request made
      request
        .respondWith({
          status: 200,
          response: homeLand
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:${port}/${homeLand.imdbID}`);
          expect(dispatchMock).toBeCalledWith(setApiData(homeLand)); // it's crucial to test setApiData on its own BEFORE using it elsewhere to make sure it won't cause any issues to others that depend on it (i.e. this test)

          done(); // test is done, return now
        });
    });
  });
});
