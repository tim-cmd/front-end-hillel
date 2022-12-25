import '../css/style.css';

import React, { useEffect, useState } from 'react';
import { getAlbums, getPhotos } from '../services/galleryService';

import Albums from './Albums';
import Photos from './Photos';

function Gallery() {
  const [albumsList, setAlbumsList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [photosList, setPhotosList] = useState([]);

  useEffect(() => {
    getAlbums().then((data) => {
      if (data.length > 0) {
        setSelectedId(data[0].id);
      }
      setAlbumsList(data);
    });
  }, []);

  useEffect(() => {
    selectedId === null || getPhotos(selectedId).then(setPhotosList);
  }, [selectedId]);

  return (
    <div className="row">
      <div className="four columns">
        <Albums
          albumsList={albumsList}
          onSelect={setSelectedId}
          selectedId={selectedId}
        />
      </div>
      <div className="eight columns">
        <Photos photosList={photosList} />
      </div>
    </div>
  );
}

export default Gallery;
