import React from 'react';
import propTypes from './app.props';
import Desc from '../Desc/Desc';

const App = ({ title }) => (

  <div className="App">
    { title }
    <Desc onMouseEnter={ () => console.log('hover') } text="Description about eslint config" />
  </div>
);

App.propTypes = propTypes;

export default App;
