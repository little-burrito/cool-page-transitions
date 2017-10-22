import React from 'react';
import './LinkBox.css';

const LinkBox = ( { children } ) => (
  <linkbox>
    <cube>
      <plane className="front">{ children }</plane>
      <plane className="back">back</plane>
      <plane className="left">left</plane>
      <plane className="right">right</plane>
      <plane className="top">top</plane>
      <plane className="bottom">bottom</plane>
    </cube>
  </linkbox>
)

export default LinkBox;