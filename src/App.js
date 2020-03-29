import React, { Component } from 'react';
import Layout from './components/layout'
import Main from './containers/main'
import Form from './login/form/Form';
import LoginForm from './login/Login';


class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }

}

export default App;
