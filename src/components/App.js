import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import HomePage from './HomePage';
import LeaderBoardPage from './LeaderBoardPage';
import Login from './Login';
import NewQuestion from './NewQuestion';
import QuestionDetail from './QuestionDetail';
import TopBar from './TopBar';
import { Container } from 'react-bootstrap';
import NotFound from './NotFound';

const App = (props) => {
  const { dispatch, loading, authedUser } = props;
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <LoadingBar />
         <TopBar />
        {loading === true ? null : authedUser === null ? (
          <Login />
        ) : (
          <Container>
            <Routes>
              <Route path="/add" element={<NewQuestion />} />
              <Route path="/questions/:id" element={<QuestionDetail />} />
              <Route path="/leaderboard" element={<LeaderBoardPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        )}
      </Fragment>
    </Router>
  );
};

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loading: loadingBar.default === undefined || loadingBar.default === 1,
  };
}

export default connect(mapStateToProps)(App);
