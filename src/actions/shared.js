import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';
//import { setAuthedUser } from '../actions/authedUser';

//const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      //dispatch(setAuthedUser(AUTHED_ID));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
