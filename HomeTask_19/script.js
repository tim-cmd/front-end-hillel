const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
const CONTAINER_CLASS = '.gallery';
const $galleryEl = $(CONTAINER_CLASS);
const api = new RestApi(PHOTO_URL);
const itemTemplate = `
<a href="{{url}}" data-imagelightbox="demo">
    <img src="{{thumbnailUrl}}">
</a>
`;

let photosList = [];

init();

function init() {
  api.getList().then((data) => {
    console.log(data);
    photosList = data;
    renderList(photosList);
    callJqueryPlugin();
  });
}

function renderList(list) {
  $galleryEl.append(list.map(generateItemHtml).join(''));
}

function generateItemHtml(item) {
  return interpolate(itemTemplate, item);
}

function callJqueryPlugin(list) {
  Fancybox.bind(`${CONTAINER_CLASS} a`, {
    groupAll: true,
    on: {
      ready: (fancybox) => {
        console.log(`fancybox #${fancybox.id} is ready!`);
      },
    },
  });
}
