const PRODUCTION = {
  SERVER_URL: 'https://brizz-server.herokuapp.com',
};

const DEVELOPMENT = {
  SERVER_URL: 'http://172.20.10.3:8080',
};

// eslint-disable-next-line no-undef
export const get_config = () => (__DEV__ ? DEVELOPMENT : PRODUCTION);
