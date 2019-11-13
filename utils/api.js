import { get_config } from "../const/SERVER";
import { get, post } from "./transport";

const config = get_config();

// Get All Users
export const get_users = async token => {
  const url = `${config.SERVER_URL}/api/users/`;
  try {
    const result = await get(url, null, token);
    return result.data;
  } catch (e) {
    if (e.response.status === 500) return false;
    // eslint-disable-next-line fp/no-throw
    else throw e;
  }
};

// Get a User by ID
export const get_user_by_email = async (email, token) => {
  const url = `${config.SERVER_URL}/api/users/${encodeURIComponent(email)}`;
  try {
    const result = await get(url, null, token);
    return result.data;
  } catch (e) {
    if (e.response.status === 500) return false;
    // eslint-disable-next-line fp/no-throw
    else throw e;
  }
};

// Get a User by Username
export const get_user_by_username = async (username, token) => {
  const url = `${config.SERVER_URL}/api/users/username/${encodeURIComponent(
    username
  )}`;
  try {
    const result = await get(url, null, token);
    return result.data;
  } catch (e) {
    if (e.response.status === 500) return false;
    // eslint-disable-next-line fp/no-throw
    else throw e;
  }
};

export const login = async (dispatch, getState) => {
  const { login_username, login_password } = getState().auth; // figure out a way to retrieve username and password form context
  const url = `${HOST}/api/users/login`;
  const body = {
    username: login_username,
    password: login_password
  };
  console.log(`Sending to ${url}`);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    console.log("Dispatching event...");
    const data = await response.json();
    console.log(data);
    const { token, complete } = data;
    if (token) {
      dispatch({
        type: types.LOGGED_IN,
        payload: token
      });
    } else {
      Alert.alert(
        "Error",
        "Bad username/password. Please double check and try again"
      );
    }
    if (complete) {
      dispatch({
        type: types.USER_COMPLETED
      });
    }
  } catch (e) {
    console.log(e);
    Alert.alert(
      "Error",
      "Bad username/password. Please double check and try again"
    );
  }
};

// Create a User
export const signup = async (dispatch, getState) => {
  const { signup_username, signup_password } = getState().auth; // figure out a way to retrieve username and password form context
  const url = `${HOST}/api/users/create`;
  const data = {
    username: signup_username,
    password: signup_password,
    passwordConfirm: signup_password
  };
  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch {
    Alert.alert(
      "Error",
      "Error logging in. Please check your credentials and try again"
    );
    return null;
  }
  const { token } = await response.json();
  if (token) {
    dispatch({
      type: types.LOGGED_IN,
      payload: token
    });
  }

  console.log(response.json());
};

// Update the User
export const update_user = () => async (dispatch, getState) => {
  const {
    email,
    password,
    statusActivated,
    activationCode,
    firstName,
    lastName,
    birthDate,
    gender,
    complete,
    lastUse,
    interests,
    ielts,
    international,
    originCountry,
    yearBudget
  } = getState().auth; // figure out a way to retrieve username and password form context

  const url = `${HOST}/api/users/${login_username}/update`;
  const data = {
    email,
    password,
    statusActivated,
    activationCode,
    firstName,
    lastName,
    birthDate,
    gender,
    complete,
    lastUse,
    interests,
    ielts,
    international,
    originCountry,
    yearBudget
  };
  const headers = {
    Authorization: `JWT ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  console.log(headers);

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers
  });
  console.log(response);
  const responseData = await response.json();
  console.log(responseData);
};

// Activate User
export const activate_user = async (username, password, passwordConfirm) => {
  const url = `${config.SERVER_URL}/api/users/activate`;
  try {
    const result = await post({
      username: encodeURIComponent(username),
      password: encodeURIComponent(password),
      passwordConfirm: encodeURIComponent(passwordConfirm)
    });
  } catch (e) {
    if (e.response.status === 500) return false;
    // eslint-disable-next-line fp/no-throw
    else throw e;
  }
};

/*
// Create User
export const create_user = async (username, password, passwordConfirm) => {
    const url = `${config.SERVER_URL}/api/users/activate`;
    try {
      const result = await post({
        username: encodeURIComponent(username),
        password: encodeURIComponent(password),
        passwordConfirm: encodeURIComponent(passwordConfirm)
      });
    } catch (e) {
      if (e.response.status === 500) return false;
      // eslint-disable-next-line fp/no-throw
      else throw e;
    }
  };
  */
