import { io } from 'socket.io-client';
import { socketListenEvent } from './event';

export const initSocket = ({ setSocketValue }) => {
  const socket = io('http://localhost:5000');

  socketListenEvent(socket, { setSocketValue });
  setSocketValue((prev) => ({ ...prev, socket }));

  // return {
  //   socket,
  //   disconnect: () => {
  //     console.log('DISCONNECT')
  //     setSocketValue(INIT_SOCKET_STATE)
  //     socket.disconnect()
  //   }
  // }
};
