import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const User = (props) => {
  const {
    name,
    avatarURL,
    questionsAnsweredCount,
    questionsCreatedCount,
    score,
  } = props.user;
  return (
    <Card>
      <br />
      <Card.Body>
        <Row>
          <Col
            xs={3}
            md={3}
            lg={3}
            className="d-flex justify-content-center  align-items-center"
          >
            <Image roundedCircle src={avatarURL} />
          </Col>
          <Col xs={6} md={6} lg={6}>
            <Card.Title>{name}</Card.Title>
            <Row style={{ border: '1px solid grey' }}>
              <Col xs={10} md={10} lg={10}>
                Answered questions:
              </Col>
              <Col xs={2} md={2} lg={2}>
                {questionsAnsweredCount}
              </Col>
            </Row>
            <br />
            <Row style={{ border: '1px solid grey' }}>
              <Col xs={10} md={10} lg={10}>
                Created questions:
              </Col>
              <Col xs={2} md={2} lg={2}>
                {questionsCreatedCount}
              </Col>
            </Row>
          </Col>
          <Col xs={3} md={3} lg={3}>
            <Card className="text-center" style={{ marginLeft: 10 }}>
              <Card.Header className="d-flex justify-content-center">
                <Card.Title>Score</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <div
                  style={{
                    backgroundColor: 'green',
                    borderRadius: '100%',
                    flex: 0.4,
                  }}
                >
                  {score}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default User;
