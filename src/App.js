import React from 'react';
import { RecoilRoot } from 'recoil';

import './App.css';
import Main from './containers/Main/Main';
import Experience from './containers/Experience/Experience';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <RecoilRoot>
      <div id="home" className="App">
        <Layout>
          <Main></Main>
          <Experience></Experience>
        </Layout>
      </div>
    </RecoilRoot>
  );
}

export default App;
