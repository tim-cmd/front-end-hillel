const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
const CONTAINER_CLASS = '.gallery';
const $galleryEl = $(CONTAINER_CLASS);
const api = new RestApi(PHOTO_URL);
const itemTemplate = $('#photeTemplate').html();

init();

function init() {
  api
    .getList()
    .then((data) => {
      console.log(data);
      renderList(data);
    })
    .then(callJqueryPlugin);
}

function renderList(list) {
  $galleryEl.append(list.map(generateItemHtml).join(''));
}

function generateItemHtml(item) {
  return interpolate(itemTemplate, item);
}

function callJqueryPlugin() {
  Fancybox.bind(`${CONTAINER_CLASS} a`, {
    groupAll: true,
    on: {
      ready: (fancybox) => {
        console.log(`fancybox #${fancybox.id} is ready!`);
      },
    },
  });
}
