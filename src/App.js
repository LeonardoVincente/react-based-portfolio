import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';


import './App.css';
import Main from './containers/Main/Main';
import Layout from './hoc/Layout/Layout';

function App() {
  return (

    <Router>
      <div className="App">
        <Layout>
          {/* <Main></Main> */}
          <Switch>
            <Route path="/" >
              <Main></Main>
            </Route>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    </Router>

  );
}

export default withRouter(App);
