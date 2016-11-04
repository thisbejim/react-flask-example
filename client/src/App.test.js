import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Lol = () => <p>hello</p>
it('renders without crashing', () => {
  const div = document.createElement('root');
  ReactDOM.render(<Lol />, div);
});
