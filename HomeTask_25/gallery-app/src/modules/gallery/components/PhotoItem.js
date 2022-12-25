import React from 'react';

function PhotosItem({ image }) {
  return <img src={image.thumbnailUrl} alt={image.title} />;
}

export default PhotosItem;
