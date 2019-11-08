import React, { Component } from 'react';
import userService from '../../utils/userService';
import { Container, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './LogIn.scss';

class LogIn extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            // When successfully signed up show dashboard (root)
            this.props.handleSignUpOrLogIn();
            // this.props.history.push('/');
        } catch (err) {
            // Invalid user data
            // TODO: code modal instead of alert
            // this.props.updateMessage(err.message);
            alert('Invalid credentials!');
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Modal
                        isOpen={this.props.logInModalIsOpen}
                        id="log-in-modal"
                    >
                        <ModalHeader >
                            Log In
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <div>
                                        <input
                                            type='email'
                                            placeholder='Email'
                                            value={this.state.email}
                                            name='email'
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <input
                                            type='password'
                                            placeholder='Password'
                                            value={this.state.password}
                                            name='password'
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <Button
                                    type='submit'
                                    color='primary'
                                    handleSubmit={this.handleSubmit}
                                    onClick={this.props.toggleLogInModal}
                                    isOpen={this.props.logInModalIsOpen}
                                >Log In</Button>
                                <Button
                                    onClick={this.props.toggleLogInModal}
                                    isOpen={this.props.logInModalIsOpen}
                                    id="cancel"
                                >Cancel</Button>
                            </form>
                            <p>{this.state.message}</p>
                        </ModalBody>
                    </Modal>
                </Container>
            </div>
        )
    }


}

export default LogIn;