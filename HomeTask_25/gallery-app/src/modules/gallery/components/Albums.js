import AlbumItem from './AlbumItem';
import React from 'react';

function Albums({ albumsList, onSelect, selectedId }) {
  console.log('albumsList', albumsList);
  console.log('selectedId', selectedId);
  return (
    <ul>
      {albumsList.map((item) => (
        <AlbumItem
          key={item.id}
          albumItem={item}
          isSelected={item.id === selectedId}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}

export default Albums;
