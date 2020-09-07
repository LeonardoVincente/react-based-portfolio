import React from 'react';

import './App.css';
import Main from './containers/Main/Main';
import Experience from './containers/Experience/Experience';
// import About from './containers/About/About';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
      <div id="home" className="App">
        <Layout>
          <Main></Main>
          <Experience></Experience>
        </Layout>
      </div>
  );
}

export default App;
