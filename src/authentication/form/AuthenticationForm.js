import React, {
    Component
} from 'react'
import {
    Message,
    Container,
    Header,
} from 'semantic-ui-react'
import Recommendation from '../recommendation/Recommendation';
import Login from '../Login';
import Register from '../Register';
import axios from 'axios';


class AuthenticationForm extends Component {
    state = {
        isNew: false,
        error: null,
        isAuthenticated: false
    }

    toggleForm = () => {
        this.setState({
            isNew: !this.state.isNew
        });
    }

    handleLogin = (email, password) => {
        const baseURL = "http://150.136.114.158:8080";

        let data = { email, password }
        axios.post(`${baseURL}/api/auth/login`, data)
            .then(response => {
                localStorage.setItem('session', response)
            })
            .catch(err => this.setState({ error: err }))
    }

    handleRegister = (firstName, lastName, email, password, confirmPassword) => {

    }

    render() {
        return (
            <Container style={{
                margin: '50px',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }} >
                <Header style={{ color: 'teal', fontSize: '100px' }} textAlign='center'>NewsDeck</Header>
                <Header as='h1' textAlign='center' color='black'>Organize Your Knowledge. Read Smarter. Informed Faster.</Header>
                <Recommendation />
                {this.state.isNew ? <Register handleRegister={this.handleRegister} /> : <Login handleLogin={this.handleLogin} />}
                <Message><a onClick={this.toggleForm}>{this.state.isNew ? 'Log In With Us!' : 'Need An Account?'}</a></Message>
            </Container>
        );
    }
}

export default AuthenticationForm