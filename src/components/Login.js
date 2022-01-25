import React from 'react';
import { Card, Dropdown, Image, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {
  const handleClick = (userId) => {
    props.dispatch(setAuthedUser(userId));
  };
  return (
    <Row className="justify-content-center">
      <div style={{ width: '30rem', marginTop: '10px' }}>
        <Card className="text-center">
          <Card.Header>
            <Card.Title>Welcome to the Would You Rather App!</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Please sign in to continue
            </Card.Subtitle>
          </Card.Header>
          <br />
          <div>
            <Card.Img style={{ width: '20rem' }} src="/wyr_icon.png"></Card.Img>
          </div>
          <Card.Body>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sign in as...
              </Dropdown.Toggle>
              <Dropdown.Menu md="auto">
                {props.userList.map((user) => (
                  <Dropdown.Item
                    key={user.id}
                    value={user.id}
                    onClick={() => handleClick(user.id)}
                  >
                    <Row style={{ width: '14rem' }}>
                      <Col md={3}>
                        <Image
                          roundedCircle
                          thumbnail={true}
                          src={user.avatarURL}
                        />
                      </Col>
                      <Col md={4}>{user.name}</Col>
                    </Row>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>
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

export default connect(mapStateToProps)(Login);
