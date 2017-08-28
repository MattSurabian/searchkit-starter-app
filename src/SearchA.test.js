import React from 'react';
import ReactDOM from 'react-dom';
import SearchA from './SearchA';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchA />, div);
});
