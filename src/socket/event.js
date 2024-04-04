import sound from '../assets/mixkit-bubble-pop-up-alert-notification-2357.wav'
import icon from '../assets/react.svg';
export const socketListenEvent = (socket, { setSocketValue }) => {
  socket.on('connect', () => {
    setSocketValue((prev) => ({
      ...prev,
      socketId: socket.id
    }));
  });

  socket.on('ONLINE_USER_CHANGED', (onlineUsers) => {
    setSocketValue((prev) => ({
      ...prev,
      onlineUsers
    }));
  });

  socket.on('RECEIVE_MESSAGE', (messageData) => {
    setSocketValue((prev) => ({
      ...prev,
      messageData
    }));
    console.log(messageData);
    // eslint-disable-next-line no-new
    new Notification('Socket title', {
      body: messageData.message,
      icon,
      sound
    });
  });

  socket.on('MESSAGE_READ', (messageReadStatus) => {
    setSocketValue((prev) => ({
      ...prev,
      messageReadStatus
    }));
  });

  socket.on('TYPING_NOTIFY', (typingNotify) => {
    setSocketValue((prev) => ({
      ...prev,
      typingNotify
    }));
  });

  socket.on('CHAT_ROOM_NOTIFY', ({ message }) => {
    setSocketValue((prev) => ({
      ...prev,
      roomNotify: message
    }));
  });

  socket.on('INVITED_TO_ROOM', ({ message }) => {
    setSocketValue((prev) => ({
      ...prev,
      invitedNotify: message
    }));
  });
};
