import React from 'react';
import QuestionList from './QuestionList';
import { Row, Col, Tab, Tabs } from 'react-bootstrap';
const HomePage = (props) => {
  return (
    <Row className="justify-content-center">
      <Col>
        <Tabs defaultActiveKey="unanswered" className="mb-3">
          <Tab eventKey="unanswered" title="Unanswered Questions">
            <QuestionList answered={false} />
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <QuestionList answered={true} />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default HomePage;
