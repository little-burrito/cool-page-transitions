import React from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main';

const App = () => (
  <div style={ appStyle }>
    <Nav style={ navStyle } />
    <Main style={ mainStyle } />
  </div>
);

const appStyle = {
    maxWidth: '800px',
    margin: '30px auto 20px',
    minHeight: '500px',
    border: '1px solid #ccc',
    position: 'relative',
};

const navWidth = 180;

const navStyle = {
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    width: navWidth,
    borderRight: '1px solid #ccc',
};

const mainStyle = {
    position: 'absolute',
    left: navWidth,
    top: '0',
    bottom: '0',
    right: '0',
    padding: '20px',
};

export default App;