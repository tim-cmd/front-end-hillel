const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

export function getAlbums() {
  return request(ALBUMS_URL);
}

export function getPhotos(albumId) {
  return request(`${PHOTOS_URL}?albumId=${albumId}`);
}

function request(url, options) {
  return fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json();
    }

    throw new Error(res);
  });
}
