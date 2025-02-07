import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md">
      <p className="text-gray-600">{message.content}</p>
      <p className="text-sm text-gray-400">
        From: {message.sender.name} | To: {message.receiver.name}
      </p>
    </div>
  );
};

export default Message;