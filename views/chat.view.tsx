import React from 'react';
import { Message } from './services/history.service';

export const ChatMessage = ({ username, text }: Message) => (
    <div>
        <b>{username}: </b>
        <span>{text}</span>
    </div>
);

export const ChatControlls = () => (
    <div className="message-box">
        <input placeholder="User" id="user-input" />
        <input placeholder="Message" id="message-input" />
        <button> Send </button>
    </div>
);


interface ChatProps {
    messages: Message[];
}

export const Chat = ({ messages }:  ChatProps) => (
    <div className="chat">
        <div className="container">
            { messages.map((message,i) => <ChatMessage key={i} {...message} /> )}
         </div>
        <ChatControlls />
    </div>
);