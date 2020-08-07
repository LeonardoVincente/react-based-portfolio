import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';


import './App.css';
import Main from './containers/Main/Main';
import Experience from './containers/Experience/Experience';
import About from './containers/About/About';
import Layout from './hoc/Layout/Layout';

function App() {
  return (

    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    </Router>

  );
}

export default App;
