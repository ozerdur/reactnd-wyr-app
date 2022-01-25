import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <Row>
      <h1 className="text-center">404 Not Found Error</h1>
      <Link className="text-center" to="/">
        Return to Home
      </Link>
    </Row>
  );
};

export default NotFound;
