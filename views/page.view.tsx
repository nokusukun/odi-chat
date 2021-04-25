import React from 'react';
import { Chat } from './chat.view';
import { Html } from './layout.view';
import { Message } from './services/history.service';

interface ChatPageProps {
    history: Message[];
}

export const ChatPage = ({ history }: ChatPageProps) => (
    <Html>
        <Chat messages={history} />        
    </Html>
)