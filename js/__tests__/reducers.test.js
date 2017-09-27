import reducers from '../reducers';

// tests here are courtesy of redux-dev-tool

test('SET_SEARCH_TERM', () => {
  const state = reducers(
    { apiData: {}, searchTerm: 'blac' },
    { type: 'SET_SEARCH_TERM', payload: 'black' }
  );

  expect(state).toEqual({ apiData: {}, searchTerm: 'black' });
});

test('STORE_API_DATA', () => {
  const state = reducers(
    { apiData: {}, searchTerm: 'brea' },
    {
      type: 'STORE_API_DATA',
      payload: {
        rating: '4.6',
        title: 'Breaking Bad',
        year: '2008–2013',
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: 'bb.jpg',
        imdbID: 'tt0903747',
        trailer: 'XZ8daibM3AE'
      }
    }
  );

  expect(state).toEqual({
    apiData: {
      tt0903747: {
        rating: '4.6',
        title: 'Breaking Bad',
        year: '2008–2013',
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: 'bb.jpg',
        imdbID: 'tt0903747',
        trailer: 'XZ8daibM3AE'
      }
    },
    searchTerm: 'brea'
  });
});

test('STORE_API_DATA (with two shows)', () => {
  const state = reducers(
    {
      apiData: {
        tt0944947: {
          rating: '0.4',
          title: 'Game of Thrones',
          year: '2011–',
          description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
          poster: 'got.jpg',
          imdbID: 'tt0944947',
          trailer: 'giYeaKsXnsI'
        }
      },
      searchTerm: ''
    },
    {
      type: 'STORE_API_DATA',
      payload: {
        rating: '4.6',
        title: 'Breaking Bad',
        year: '2008–2013',
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: 'bb.jpg',
        imdbID: 'tt0903747',
        trailer: 'XZ8daibM3AE'
      }
    }
  );
  expect(state).toEqual({
    apiData: {
      tt0944947: {
        rating: '0.4',
        title: 'Game of Thrones',
        year: '2011–',
        description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
        poster: 'got.jpg',
        imdbID: 'tt0944947',
        trailer: 'giYeaKsXnsI'
      },
      tt0903747: {
        rating: '4.6',
        title: 'Breaking Bad',
        year: '2008–2013',
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: 'bb.jpg',
        imdbID: 'tt0903747',
        trailer: 'XZ8daibM3AE'
      }
    },
    searchTerm: ''
  });
});
