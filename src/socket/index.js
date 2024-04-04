import { io } from 'socket.io-client';
import { socketListenEvent } from './event';

const URLS = ['http://localhost:9999', 'https://realtime-chat-env.eba-sks35jdm.us-east-2.elasticbeanstalk.com'];

export const initSocket = ({ setSocketValue }) => {
  const socket = io(URLS[0]);
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
