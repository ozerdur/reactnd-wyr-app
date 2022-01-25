import React from 'react';
import { connect } from 'react-redux';

import { Card, Row, Col, Image, ProgressBar } from 'react-bootstrap';
const QuestionAnswered = (props) => {
  const { yourChoice } = props;
  const { name, avatarURL } = props.user;
  const { optionOne, optionTwo } = props.question;

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercentage = Math.round(
    (optionOne.votes.length * 100) / totalVotes
  );
  const optionTwoPercentage = Math.round(
    (optionTwo.votes.length * 100) / totalVotes
  );
  return (
    <Card>
      <Card.Header>
        <Card.Title>{name} asks:</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col
            xs={4}
            md={4}
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Image roundedCircle src={avatarURL} />
          </Col>
          <Col xs={8} md={8} lg={8}>
            <Card.Title>Results:</Card.Title>
            <Card>
              {yourChoice === 'optionOne' && (
                <Card.Header
                  className="text-center"
                  style={{ background: 'green' }}
                >
                  Your Choice
                </Card.Header>
              )}
              <Card.Body>
                <Card.Text>Would you rather {optionOne.text}?</Card.Text>
                <ProgressBar
                  now={optionOnePercentage}
                  label={`${optionOnePercentage}%`}
                />
                <Card.Title className="text-center">
                  {optionOne.votes.length} out of {totalVotes} votes
                </Card.Title>
              </Card.Body>
            </Card>
            <br />
            <Card>
              {yourChoice === 'optionTwo' && (
                <Card.Header
                  className="text-center"
                  style={{ background: 'green' }}
                >
                  Your Choice
                </Card.Header>
              )}
              <Card.Body>
                <Card.Text>Would you rather {optionTwo.text}?</Card.Text>
                <ProgressBar
                  now={optionTwoPercentage}
                  label={`${optionTwoPercentage}%`}
                />
                <Card.Title className="text-center">
                  {optionTwo.votes.length} out of {totalVotes} votes
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  const yourChoice = users[authedUser].answers[id];
  return {
    user,
    question,
    yourChoice,
  };
}

export default connect(mapStateToProps)(QuestionAnswered);
