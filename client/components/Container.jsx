import React from 'react';

const Container = (props) => {
  const {
    img,
    handleDragStart,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleDropEnd,
    draggable,
  } = props;
  return (
    <div
      className="imgBox"
      draggable={draggable}
      onDrag={(e) => {
        handleDragStart();
      }}
      onDragEnter={(e) => {
        handleDragEnter(e);
      }}
      onDragLeave={(e) => {
        handleDragLeave(e);
      }}
      onDragOver={(e) => {
        handleDragOver(e);
      }}
      onDrop={(e) => {
        handleDrop(e);
      }}
      onDragEnd={(e) => {
        handleDropEnd(e);
      }}
    >
      {img}
    </div>
  );
};

export default Container;
