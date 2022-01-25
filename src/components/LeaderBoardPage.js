import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import { Row, Col } from 'react-bootstrap';

const LeaderBoardPage = (props) => {
  const { users } = props;
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={12} lg={6}>
        {users.map((u) => (
          <Row key={u.id} style={{ margin: '10px' }}>
            <User user={u} />
          </Row>
        ))}
      </Col>
    </Row>
  );
};

function mapStateToProps({ users }) {
  const sortedUsers = Object.values(users)
    .map((u) => ({
      questionsCreatedCount: u.questions.length,
      questionsAnsweredCount: Object.keys(u.answers).length,
      score: u.questions.length + Object.keys(u.answers).length,
      name: u.name,
      avatarURL: u.avatarURL,
      id: u.id,
    }))
    .sort((a, b) => b.score - a.score);

  return {
    users: sortedUsers,
  };
}

export default connect(mapStateToProps)(LeaderBoardPage);
