import PhotoItem from './PhotoItem';
import React from 'react';

function Photos({ photosList }) {
  console.log('photosList', photosList);
  return (
    <>
      {photosList.map((item) => (
        <PhotoItem key={item.id} image={item} />
      ))}
    </>
  );
}

export default Photos;
