import React from 'react';
import { connect } from 'react-redux';
import QuestionUnanswered from './QuestionUnanswered';
import QuestionAnswered from './QuestionAnswered';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import NotFound from './NotFound';

const QuestionDetail = (props) => {
  const { answers, questions } = props;

  const { id } = useParams();
  const yourChoice = answers[id];
  const exist = questions[id];
  if (exist) {
    return (
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={6}>
          {yourChoice && <QuestionAnswered id={id} />}
          {!yourChoice && <QuestionUnanswered id={id} />}
        </Col>
      </Row>
    );
  } else {
    return <NotFound />;
  }
};

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const answers = users[authedUser].answers;

  return {
    answers,
    questions,
  };
}

export default connect(mapStateToProps)(QuestionDetail);
