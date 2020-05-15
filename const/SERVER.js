const PRODUCTION = {
  SERVER_URL: 'https://brizz-server.herokuapp.com',
};

const DEVELOPMENT = {
  SERVER_URL: 'https://brizz-server.herokuapp.com',
};

// eslint-disable-next-line no-undef
export const get_config = () => (__DEV__ ? DEVELOPMENT : PRODUCTION);
