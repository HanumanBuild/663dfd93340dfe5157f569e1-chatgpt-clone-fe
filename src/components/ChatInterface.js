import React from 'react';
import MessageInput from './MessageInput';
import SubmitButton from './SubmitButton';

function ChatInterface() {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <div id="messages" className="h-64 overflow-y-auto mb-4 p-4 bg-gray-100 rounded">
        {/* Messages will be displayed here */}
      </div>
      <MessageInput />
      <SubmitButton />
    </div>
  );
}

export default ChatInterface;