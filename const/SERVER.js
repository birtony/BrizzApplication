import Expo from 'expo';
const {manifest} = Expo.Constants;

const PRODUCTION = {
  SERVER_URL: 'https://brizz-server.herokuapp.com',
};

const DEVELOPMENT = {
  SERVER_URL:
    typeof manifest.packagerOpts === 'object' && manifest.packagerOpts.dev ?
      `http://${manifest.debuggerHost.split(':')[0]}:8080` :
      'localhost:8080', // IF IT DOES NOT GETS SET, START PANICKING
};

// eslint-disable-next-line no-undef
export const get_config = () => (__DEV__ ? DEVELOPMENT : PRODUCTION);
