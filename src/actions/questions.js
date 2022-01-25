import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, cb) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      cb();
    });
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion({ qid, authedUser, answer }) {
  return {
    type: ANSWER_QUESTION,
    answerInfo: { qid, authedUser, answer },
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const answerInfo = { qid, answer, authedUser };
    dispatch(showLoading());
    return saveQuestionAnswer(answerInfo)
      .then(() => dispatch(answerQuestion(answerInfo)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        alert('An error occurred while answering the question');
      });
  };
}
