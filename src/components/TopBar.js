import React from 'react';
import { connect } from 'react-redux';
import { handleLogoutUser } from '../actions/authedUser';
import { Navbar, Nav, Button, Container, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TopBar = (props) => {
  const navigate = useNavigate();
  const { user, dispatch } = props;

  const handleLogout = () => {
    dispatch(
      handleLogoutUser(() => {
        navigate('/');
      })
    );
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Would you rather
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add">
              New Question
            </Nav.Link>
            <Nav.Link as={NavLink} to="/leaderboard">
              Leaderboard
            </Nav.Link>
          </Nav>
          {user && (
            <Nav className="align-items-start">
              <Navbar.Text>Hello, {user.name}</Navbar.Text>
              <Image
                src={user.avatarURL}
                width="40"
                height="40"
                roundedCircle
                className="mx-3"
                alt="user photo"
              />
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function mapStateToProps({ users, authedUser }) {
  console.log(users[authedUser]);
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(TopBar);
