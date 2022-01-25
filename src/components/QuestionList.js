import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import QuestionSummary from './QuestionSummary';
import { containsObject } from '../utils/helpers';

const QuestionList = (props) => {
  const { questionIds } = props;

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={12} lg={6}>
        {questionIds.map((id) => (
          <QuestionSummary key={id} id={id} />
        ))}
      </Col>
    </Row>
  );
};

function mapStateToProps({ questions, users, authedUser }, { answered }) {
  const answerQuestionIds = Object.keys(users[authedUser].answers);

  let questionIds = answered
    ? answerQuestionIds
    : Object.keys(questions).filter(
        (id) => containsObject(id, answerQuestionIds) === false
      );

  questionIds = questionIds.sort(
    (a, b) => questions[b]?.timestamp - questions[a]?.timestamp
  );

  return {
    questionIds,
  };
}

export default connect(mapStateToProps)(QuestionList);
