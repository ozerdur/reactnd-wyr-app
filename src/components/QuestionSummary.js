import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { Card, Row, Col, Image, Button } from 'react-bootstrap';
const QuestionSummary = (props) => {
  const { name, avatarURL } = props.user;
  const { optionOne, id } = props.question;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/questions/${id}`);
  };

  return (
    <Card style={{ margin: '10px' }}>
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
            <Card.Title>Would you rather</Card.Title>
            <Card.Subtitle>{optionOne.text}</Card.Subtitle>
            <Card.Subtitle>or ...</Card.Subtitle>
            <br></br>
            <Button
              onClick={handleClick}
              style={{
                width: '100%',
                minWidth: '10rem',
              }}
            >
              View Poll
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    user,
    question,
  };
}

export default connect(mapStateToProps)(QuestionSummary);
