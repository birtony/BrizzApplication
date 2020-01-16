import { Alert } from 'react-native';
import { get_config } from './const/SERVER';

const config = get_config();

export const login = async (user) => {
  const url = `${config.SERVER_URL}/api/users/login`;
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

export const getAllPrograms = async (token) => {
  const url = `${config.SERVER_URL}/api/programs`;
  console.log(`Sending to ${url}`);
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: '',
    });
    console.log('Dispatching event...');
    const data = await response.json();
    console.log('data =' + JSON.stringify(data));
    if (data) {
      return data;
    } else {
      Alert.alert('Error', 'No Programs Found');
    }
  } catch (e) {
    console.log(e);
    Alert.alert('Error', 'Probably your token is invalid, try again');
  }
};
