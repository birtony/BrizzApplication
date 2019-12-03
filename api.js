import { Alert } from 'react-native';
import { get_config } from './const/SERVER';

const config = get_config();

export const login = async (user) => {
  const url = `${config.SERVER_URL}/api/users/login`;
  const body = {
    username: user.email,
    password: user.password,
  };
  console.log(`Sending to ${url}`);
  console.log('body = ' + body);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log('Dispatching event...');
    const data = await response.json();
    console.log(data);
    const { token, complete } = data;
    if (token) {
      return { token, complete };
    } else {
      Alert.alert('Error', 'Bad username/password. Please double check and try again');
    }
  } catch (e) {
    console.log(e);
    Alert.alert('Error', 'Bad username/password. Please double check and try again');
  }
};

export const signup = async (user) => {};
