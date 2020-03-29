import React, { Component } from 'react';
import AuthenticationForm from './authentication/form/AuthenticationForm';
import Layout from './components/layout'
import Main from './containers/main'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true
    }
  }

  handleAuthentication = ({ response, tags }) => {
    if (response) {
      console.log(response)
      localStorage.setItem("session", response)
      localStorage.setItem("tags", tags)
      this.setState({ isAuthenticated: true })
    }
  }

  render() {
    return (
      <div>
        {this.state.isAuthenticated ? (
          <Layout>
            <Main></Main>
          </Layout>
        ) : (<AuthenticationForm handleAuthentication={this.handleAuthentication} />)
        }
      </div>
    );
  }

}

export default App;