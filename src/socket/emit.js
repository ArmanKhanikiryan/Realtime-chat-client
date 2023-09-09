export const socketEmitEvent = (socket) => {
  return {
    userOnline: (userId, socketId) => {
      socket.emit('USER_ONLINE', userId, socketId);
    },
    userOffline: (userId) => {
      socket.emit('USER_OFFLINE', userId);
    },
    sendMessage: (messageData) => {
      socket.emit('SEND_MESSAGE', messageData);
    },
    updateMessageStatus: (updatedData) => {
      socket.emit('UPDATE_MESSAGE_STATUS', updatedData);
    },
    updateMessageReaders: (updatedData) => {
      socket.emit('UPDATE_MESSAGE_READERS', updatedData);
    },
    userTyping: (typingNotify) => {
      socket.emit('USER_TYPING', typingNotify);
    },
    enterChatRoom: (data) => {
      socket.emit('ENTER_CHAT_ROOM', data);
    },
    leaveChatRoom: (data) => {
      socket.emit('LEAVE_CHAT_ROOM', data);
    },
    roomCreated: (data) => {
      socket.emit('ROOM_CREATED', data);
    }
  };
};
