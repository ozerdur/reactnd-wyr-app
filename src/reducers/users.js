import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions';
import { RECEIVE_USERS } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat(question.id),
        },
      };

    case ANSWER_QUESTION:
      const { qid, answer, authedUser } = action.answerInfo;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: { ...state[authedUser].answers, [qid]: answer },
        },
      };
    default:
      return state;
  }
}
