import React, { Component } from 'react';
import userService from '../../utils/userService';
import { Container, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import './LogIn.scss';

class LogIn extends Component {
    state = {
        email: '',
        password: '',
        message: ''
    };

    updateMessage = (msg) => {
        this.setState({ message: msg })
    }

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
        } catch (err) {
            // Invalid user data
            // TODO: code modal instead of alert
            this.updateMessage(err.message);
            // alert('Invalid credentials!');
        }
    }

    isFormInvalid() {
        return !(this.state.email && this.state.password);
    }

    render() {
        return (
            <div>
                <Container>
                    <Modal
                        isOpen={this.props.logInModalIsOpen}
                        id="log-in-modal"
                        className='sign-up-form'
                    >
                        <ModalHeader className='sign-up-form'>
                            Log In
                        </ModalHeader>
                        <ModalBody className='sign-up-form'>
                            <Form onSubmit={this.handleSubmit}>
                                <div>
                                    <div>
                                        <Input
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
                                        <Input
                                            type='password'
                                            placeholder='Password'
                                            value={this.state.password}
                                            name='password'
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='button-box'>
                                    <Button
                                        type='submit'
                                        outline color='primary'
                                        disabled={this.isFormInvalid()}
                                        handleSubmit={this.handleSubmit}
                                        onClick={this.props.toggleLogInModal}
                                        isOpen={this.props.logInModalIsOpen}
                                    >Log In</Button>
                                    <Button
                                        onClick={this.props.toggleLogInModal}
                                        isOpen={this.props.logInModalIsOpen}
                                        id="cancel"
                                    >Cancel</Button>
                                </div>
                            </Form>
                            <p className='error'>{this.state.message}</p>
                        </ModalBody>
                    </Modal>
                </Container>
            </div>
        )
    }


}

export default LogIn;