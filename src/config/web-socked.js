import io from 'socket.io-client';
const STRAPI_ENDPOINT = process.env.REACT_APP_SERVER_URL;

export const socket = io(STRAPI_ENDPOINT);
