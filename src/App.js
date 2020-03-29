import React, { Component } from 'react';
import Layout from './components/layout'
import Main from './containers/main'
import AuthenticationForm from './authentication/form/AuthenticationForm';
import LoginForm from './login/Login';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <AuthenticationForm />
      </div>
    );
  }

}

export default App;