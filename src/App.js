import React from 'react';
import Layout from './components/layout'
import Main from './containers/main'
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <Layout>
      <Sidebar />
      <Main />
    </Layout>
  );
}

export default App;
