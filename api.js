import { Alert } from 'react-native';
import { get_config } from './const/SERVER';

const config = get_config();

export const login = async (user) => {
  const url = `${config.SERVER_URL}/api/users/login`;
  console.log('user = ' + JSON.stringify(user));
  const data = {
    email: user.email,
    password: user.password,
  };
  let response;
  try {
    // eslint-disable-next-line fp/no-mutation
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    Alert.alert('Error', 'Bad username/password. Please double check and try again');
    return null;
  }
  const { token } = await response.json();
  if (token) {
    return token;
  } else {
    Alert.alert('Error', 'Bad username/password. Please double check and try again');
    return null;
  }
};

export const signup = async (user) => {
  const url = `${config.SERVER_URL}/api/users/create`;
  const data = {
    email: user.email,
    password: user.signup_password,
    passwordConfirm: user.signup_passwordConf,
  };
  let response;
  try {
    // eslint-disable-next-line fp/no-mutation
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    Alert.alert('Error', 'Error signing up. Please check your credentials and try again');
    return null;
  }
  const { token } = await response.json();
  if (token) {
    return token;
  } else {
    Alert.alert('Error', 'Error signing up. Please check your credentials and try again');
    return null;
  }
};
