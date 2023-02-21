const SESSION_KEY = 'my-patreon-like-platform-session';

function login(username, password) {
  // Make an API request to authenticate the user's credentials
  const isAuthenticated = true;

  if (isAuthenticated) {
    const sessionData = {
      user: { username },
      token: 'my-auth-token',
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    return true;
  } else {
    return false;
  }
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
}

function getSession() {
  const sessionData = sessionStorage.getItem(SESSION_KEY);
  if (sessionData) {
    return JSON.parse(sessionData);
  } else {
    return null;
  }
}

export { login, logout, getSession };
