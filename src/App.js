import React from 'react';
import Layout from './components/layout'
import Main from './containers/main'
import "./styles.css";
import SideBar from "./components/sidebar";

function App() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default App;
