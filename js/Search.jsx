import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Search = () => (
  <div className="search">
    {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
    {preload.shows.map((show, idx) => (
      <ShowCard show={show} key={idx} />
    ))}
  </div>
);

export default Search;

