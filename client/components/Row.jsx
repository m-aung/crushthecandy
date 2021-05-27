import React from 'react';
import Container from './Container.jsx';

const Row = (props) => {
  const {
    imgArray,
    handleDragStart,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleDragEnd,
    draggable,
    id,
  } = props;
    // const { imgArray } = props;
  const colArray = [];
  for (let i = 0; i < 7; i += 1) {
    colArray.push(
      <Container
        key={i + id}
        id={i + id}
        // img={imgArray[Math.floor(Math.random() * (imgArray.length - 1))]}
        img={imgArray[i + id + id]}
        imgArray={imgArray}
        draggable={draggable}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
        handleDragLeave={handleDragLeave}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        handleDragEnd={handleDragEnd}
      />,
    );
  }
  return <div className="col">{colArray}</div>;
};

export default Row;
