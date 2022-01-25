import React, { useState } from 'react';
import { Card, Col, Row, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Navigate } from 'react-router-dom';

const NewQuestion = (props) => {
  const [toHome, setToHome] = useState(false);
  const [errors, setErrors] = useState({});
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      props.dispatch(
        handleAddQuestion(optionOneText, optionTwoText, () => {
          setToHome(true);
        })
      );
    }
  };

  const handleValidation = () => {
    const errs = {};
    if (optionOneText === '') {
      errs['optionOneText'] = 'Cannot be empty';
    }
    if (optionTwoText === '') {
      errs['optionTwoText'] = 'Cannot be empty';
    }

    if (optionOneText !== '' && optionOneText.trim() === optionTwoText.trim()) {
      errs['identical'] = 'Options cannot be the same';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  if (toHome === true) {
    return <Navigate to="/" />;
  }

  return (
    <Row className="justify-content-center">
      <span></span>
      <br></br>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header className="text-center justify-content-center">
            <Card.Title>Create New Question</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text className="mb-2 text-muted">
              Complete the question
            </Card.Text>
            <Card.Title>Would you rather ...</Card.Title>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="formOptionOne">
                <Form.Control
                  type="text"
                  value={optionOneText}
                  required={true}
                  onChange={(e) => {
                    const text = e.target.value;
                    setOptionOneText(text);
                    if (text !== '') {
                      const errs = { ...errors };
                      delete errs['optionOneText'];
                      setErrors(errs);
                    }
                  }}
                  placeholder="Enter Option One Text Here"
                />
                <span style={{ color: 'red' }}>{errors['optionOneText']}</span>
              </Form.Group>
              <Card.Text className="mb-2 text-center">OR</Card.Text>
              <Form.Group className="mb-3" controlId="formOptionTwo">
                <Form.Control
                  type="text"
                  value={optionTwoText}
                  required={true}
                  onChange={(e) => {
                    const text = e.target.value;
                    setOptionTwoText(text);
                    const errs = { ...errors };
                    delete errs['optionTwoText'];
                    setErrors(errs);
                  }}
                  placeholder="Enter Option Two Text Here"
                />
                <span style={{ color: 'red' }}>{errors['optionTwoText']}</span>
                <br />
              </Form.Group>
              <span style={{ color: 'red' }}>{errors['identical']}</span>
              <Button
                onClick={handleClick}
                style={{ width: '100%', minWidth: '10rem' }}
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

function mapStateToProps({ users }) {
  return {
    userList: Object.values(users).map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
    })),
  };
}

export default connect(mapStateToProps)(NewQuestion);
