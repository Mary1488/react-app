import React from 'react';
import classes from './Image.module.css';
import Img from './image.svg';

const Image = () => {
  return (
    <div className={classes.container}>
      <img src={Img} />
    </div>
  );
}

export default Image;