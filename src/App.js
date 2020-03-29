import React, { Component } from 'react';
import Layout from './components/layout'
import Main from './containers/main'
import Form from './splash/form/Form';

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
