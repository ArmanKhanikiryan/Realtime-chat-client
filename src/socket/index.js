import { io } from 'socket.io-client';
import { socketListenEvent } from './event';
<<<<<<< Updated upstream
const URLS = ['http://localhost:9999', 'https://realtime-chat-env.eba-sks35jdm.us-east-2.elasticbeanstalk.com'];
=======

const URLS = ['http://localhost:9999', 'https://realtime-chat-server-lemon.vercel.app'];
>>>>>>> Stashed changes
export const initSocket = ({ setSocketValue }) => {
  const socket = io(URLS[1]);
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
