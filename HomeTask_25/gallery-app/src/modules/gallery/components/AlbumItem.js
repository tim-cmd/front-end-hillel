import React from 'react';

function AlbumItem({ albumItem, isSelected, onSelect }) {
  function onItemClick(e) {
    console.log('clicked', albumItem.id);
    return onSelect(albumItem.id);
  }
  return (
    <li onClick={onItemClick} className={isSelected ? 'active' : ''}>
      {albumItem.title}
    </li>
  );
}

export default AlbumItem;
