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
    constructor(props) {
        super(props)
        this.state = {
            baseURL: "http://150.136.114.158:8080",
            isNew: false,
            error: null,
            isAuthenticated: false,
            tags: [],
            response: null
        }

        axios.post(`${this.state.baseURL}/api/twitter`)
            .then(res => res.data.access_token)
            .then(token => {
                let headers = {
                    "Authorization": `Bearer ${token}`
                }
                axios.get(`${this.state.baseURL}/api/twitter/trends`, { headers })
                    .then(res => {
                        const tagNames = res.data[0].trends.map(obj => obj.name)
                        this.setState({ tags: tagNames });
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }



    toggleForm = () => {
        this.setState({
            isNew: !this.state.isNew
        });
    }

    handleLogin = (email, password) => {

        let data = { email, password }

        console.log(data)
        axios.post(`${this.state.baseURL}/api/auth/login`, data)
            .then(response => {
                this.props.handleAuthentication({ response, tags: this.state.tags })
            })
            .catch(err => this.setState({ error: err }))
        localStorage.setItem("session", this.state.response)
        localStorage.setItem("tags", this.state.tags)
        if (this.state.response) {
            this.props.handleAuthentication()
        }
    }

    handleRegister = (firstName, lastName, email, password, confirmPassword) => {

        let data = { firstName, lastName, email, password, tags: this.state.tags }

        axios.post(`${this.state.baseURL}/api/auth/register`, data)
            .then(response => this.props.handleAuthentication({ response, tags: this.state.tags })
            )
            .catch(err => this.setState({ error: err }))
    }

    handleChoosingTopic = ({ chosen, tagName }) => {
        if (!chosen) {
            const newTags = this.state.tags;
            var index = newTags.indexOf(tagName);
            if (index !== -1) newTags.splice(index, 1);
            // let newTags = this.state.tags.map(tag => tag !== tagName ? tag : null)
            this.setState({ tags: newTags })
        } else {
            this.setState({ tags: [...this.state.tags, tagName] })
        }
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
                <Recommendation tags={this.state.tags} handleChoosingTopic={this.handleChoosingTopic} />
                {this.state.isNew ? <Register handleRegister={this.handleRegister} /> : <Login handleLogin={this.handleLogin} />}
                <Message><a onClick={this.toggleForm}>{this.state.isNew ? 'Log In With Us!' : 'Need An Account?'}</a></Message>
            </Container>
        );
    }
}

export default AuthenticationForm