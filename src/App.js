import React, { Component } from 'react';

import AuthenticationForm from './authentication/form/AuthenticationForm';

import Layout from './components/layout'
import Main from './containers/main'
import Form from './login/form/Form';
import LoginForm from './login/Login';

class App extends Component {
  render() {
    return (
      <div>
        <AuthenticationForm />
      </div>
    );
  }

}

export default App;