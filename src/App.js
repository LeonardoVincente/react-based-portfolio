import React from 'react';
import './App.css';
import Main from './components/containers/Main/Main';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
          <Main></Main>
      </Layout>
    </div>
  );
}

export default App;
