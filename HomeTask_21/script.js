// const CHAT_URL = 'wss://fep-app.herokuapp.com/';
const CHAT_URL =
  'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';

const itemTemplate = document.getElementById('itemTemplate').innerHTML;

const chatForm = document.getElementById('chatForm');
const contentEl = document.getElementById('content');

chatForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  send(chatForm.elements.authorInp.value, chatForm.elements.msgInp.value);
}

const socket = new WebSocket(CHAT_URL);

socket.onopen = () => {
  console.log('socket connected!');
  send('Artem', 'Hello All');
};

socket.onclose = () => {
  console.log('socket closed!');
};

socket.onerror = () => {
  console.log('socket error!');
};

socket.onmessage = ({ data }) => {
  console.log('msg data', data);
  data = JSON.parse(data);
  if (data.type === 'message' && data.payload) {
    addMessage(data);
  }
};

function send(name, msg) {
  const package = {
    type: 'message',
    payload: {
      author: name,
      message: msg,
    },
  };

  socket.send(JSON.stringify(package));
}

function addMessage({ payload }) {
  contentEl.innerHTML += interpolate(itemTemplate, payload);
}
