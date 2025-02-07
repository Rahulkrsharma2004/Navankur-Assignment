import React from 'react';
import Message from '../components/Message';

const Messages = () => {
  const messages = [
    {
      id: 1,
      content: 'Hello, are you available for an interview?',
      sender: { name: 'Recruiter 1' },
      receiver: { name: 'Job Seeker 1' },
    },
    {
      id: 2,
      content: 'Yes, I am available.',
      sender: { name: 'Job Seeker 1' },
      receiver: { name: 'Recruiter 1' },
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Messages;