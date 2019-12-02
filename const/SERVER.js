import Constants from 'expo-constants';
const { manifest } = Constants;

const PRODUCTION = {
  SERVER_URL: 'https://brizz-server.herokuapp.com',
};

const DEVELOPMENT = {
  SERVER_URL: 'http://192.168.0.16:8080',
};

// eslint-disable-next-line no-undef
export const get_config = () => (__DEV__ ? DEVELOPMENT : PRODUCTION);
