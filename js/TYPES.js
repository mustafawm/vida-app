import { arrayOf, shape, string } from 'prop-types';

export const SHOW = shape({
  title: string,
  year: string,
  description: string,
  imdbID: string,
  trailer: string,
  poster: string
});

export const SHOWS = arrayOf(SHOW);


export const DEFAULT_SHOW = {
  title: '',
  year: '',
  description: '',
  imdbID: '',
  trailer: '',
  poster: ''
}

export const DEFAULT_SHOWS = [DEFAULT_SHOW]
