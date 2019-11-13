import axios from "axios";

export const generate_auth_header = token => ({
  Authorization: `Bearer ${token}`
});

export const generate_header = token => ({
  ...generate_auth_header(token),
  Accept: "application/json"
});

export const post = (url, data, token) =>
  axios({
    method: "POST",
    url,
    data,
    headers: generate_header(token)
  });

export const get = (url, data, token) =>
  axios({
    method: "GET",
    url,
    data,
    headers: generate_header(token)
  });

// eslint-disable-next-line max-lines-per-function
export const to_query_string = (object, base) => {
  const queryString = [];

  Object.keys(object).forEach(function(key) {
    let result;
    let value;

    // eslint-disable-next-line prefer-const,fp/no-mutation
    value = object[key];

    if (base) {
      key = base + "[" + key + "]";
    }
    switch (typeof value) {
      case "object":
        // eslint-disable-next-line fp/no-mutation
        result = toQueryString(value, key);
        break;
      case "array":
        var qs = {};
        value.forEach(function(val, i) {
          qs[i] = val;
        });
        result = Object.encodeToQueryString(qs, key);
        break;
      default:
        result = key + "=" + encodeURIComponent(value);
    }

    if (value != null) {
      queryString.push(result);
    }
  });
  return queryString.join("&");
};
