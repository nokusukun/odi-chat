
const button = document.querySelector('button');

const messageInput = document.querySelector('#message-input');
const usernameInput = document.querySelector('#user-input');
const container = document.querySelector('.container');


const socket = io('/chat');
socket.on('message:new', message => {
    const messageElement = createMessage(message);

    container.appendChild(messageElement);
});


button.onclick = () => {
    socket.emit('massage:send', { 
        text: messageInput.value, 
        username: usernameInput.value
    });

    messageInput.value = "";
}

function createMessage({ username, text }) {
    const element = document.createElement('div');
    element.innerHTML = `
        <b>${username}: </b>
        <span>${text}</span>
    `;

    return element;
}