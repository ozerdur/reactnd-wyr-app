import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';

import { Card, Row, Col, Image, Button, Form } from 'react-bootstrap';
const QuestionUnanswered = (props) => {
  const { name, avatarURL } = props.user;
  const { optionOne, optionTwo, id } = props.question;

  const [option, setOption] = useState('');
  const [err, setErr] = useState('');

  const handleChange = (e) => {
    e.persist();
    setErr('');
    setOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = props;

    if (option !== '') {
      dispatch(handleAnswerQuestion(id, option));
    } else {
      setErr('Make your choice first!');
    }
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>{name} asks:</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={4} md={4} lg={4} className="d-flex justify-content-center">
            <Image roundedCircle variant="" src={avatarURL} />
          </Col>
          <Col xs={8} md={8} lg={8}>
            <Card.Title>Would you rather...</Card.Title>
            <br></br>
            <Form onSubmit={handleSubmit}>
              <div key={'default-radio'} className="mb-3">
                <Form.Check
                  type="radio"
                  value="optionOne"
                  id="optionOne"
                  onChange={handleChange}
                  checked={option === 'optionOne'}
                  label={optionOne.text}
                />
                <Form.Check
                  type="radio"
                  value="optionTwo"
                  id="optionTwo"
                  onChange={handleChange}
                  checked={option === 'optionTwo'}
                  label={optionTwo.text}
                />
              </div>
              <span style={{ color: 'red' }}>{err}</span>
              <Button
                type="submit"
                style={{
                  width: '100%',
                  minWidth: '10rem',
                }}
              >
                Submit
              </Button>
            </Form>
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

export default connect(mapStateToProps)(QuestionUnanswered);
