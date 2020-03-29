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

class AuthenticationForm extends Component {
    state = {
        isNew: false,
        error: null
    }

    toggleForm = () => {
        this.setState({
            isNew: !this.state.isNew
        });
    }

    handleLogin = (email, password) => {

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