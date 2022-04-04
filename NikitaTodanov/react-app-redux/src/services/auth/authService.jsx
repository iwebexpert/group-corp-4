import jwt_decode from "jwt-decode";

export const authService = {
  login,
  logout,
  get currentUserValue() {
    return getCurrentUser();
  },
  get currentPrivileges() {
    return getCurrentPriviligesBasedRoles();
  },
  get token() {
    return getCurrentToken();
  },
};

const localStorageKey = "user";

function getCurrentUser() {
  let user = localStorage.getItem(localStorageKey);
  if (user !== null) {
    user = JSON.parse(user);
  }
  return user;
}

function getCurrentToken() {
  const user = getCurrentUser();
  return user && user.token ? user.token : null;
}

function getCurrentPriviligesBasedRoles() {
  const user = getCurrentUser();
  const privileges = {
    isRoot: false,
    isUser: false,
    isProfileEdit: false,
  };

  if (!user.roles) {
    return privileges;
  }

  if (user.roles.indexOf("ROLE_USER") !== -1) {
    privileges.isUser = true;
  }

  if (user.roles.indexOf("ROLE_ROOT") !== -1) {
    privileges.isRoot = true;
    privileges.isProfileEdit = true;
  }

  return privileges;
}

function login(username, password, callback = (user) => {}) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login: username, pass: password }),
  };

  return fetch("http://localhost:3001/api/v1/user/login", options)
    .then(handleResponse)
    .then((user) => {
      let decoded = jwt_decode(user.token);
      if (typeof decoded === "object") {
        decoded["username"] = username;
        decoded["token"] = user.token;
      }

      localStorage.setItem(localStorageKey, JSON.stringify(decoded));
      callback(decoded);
      return decoded;
    });
}

function logout() {
  localStorage.removeItem(localStorageKey);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if ([400, 401, 403, 404, 500].indexOf(response.status) !== -1) {
        authService.logout();
        location.reload();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
