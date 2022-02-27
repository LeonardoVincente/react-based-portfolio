import React from 'react';
import { RecoilRoot } from 'recoil';

import './App.css';
import Main from './containers/Main/Main';
import Experience from './containers/Experience/Experience';
import Contact from './containers/Contact/Contact';
import TechStack from './containers/TechStack/TechStack';
import Layout from './hoc/Layout/Layout';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-LHYCET7WXT');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <RecoilRoot>
      <div className="App">
        <Layout>
          <Main></Main>
          <Experience></Experience>
          <TechStack />
          <Contact />
        </Layout>
      </div>
    </RecoilRoot>
  );
}

export default App;
