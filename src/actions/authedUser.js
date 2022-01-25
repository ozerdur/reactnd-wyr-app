export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGOUT = 'LOGOUT';

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

function logoutUser() {
  return {
    type: LOGOUT,
  };
}

export function handleLogoutUser(cb) {
  return (dispatch) => {
    dispatch(logoutUser());
    cb();
  };
}
