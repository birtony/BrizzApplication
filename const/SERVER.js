const PRODUCTION = {
  SERVER_URL: "https://brizz-server.herokuapp.com"
};

const DEVELOPMENT = {
  SERVER_URL: "http://10.10.10.42:8080" // DUE TO EXPO's ROUTING, CHANGE THIS TO YOUR LOCAL IP
};

export const get_config = () => (__DEV__ ? DEVELOPMENT : PRODUCTION);
