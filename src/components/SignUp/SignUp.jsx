import React, { Component } from 'react';
import userService from '../../utils/userService';
import { Container, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './SignUp.scss';

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: '',
        message: ''
    };


    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    handleChange = (e) => {
        this.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        console.log('handleSubmit called');
        e.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignUpOrLogin();
            // this.props.history.push('/');
        } catch (err) {
            this.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <div>
                <Container>
                    <Modal
                        isOpen={this.props.signUpModalIsOpen}
                    >
                        <ModalHeader >
                            Sign Up
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <div>
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            value={this.state.name}
                                            name='name'
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
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
                                <div>
                                    <div>
                                        <input
                                            type='password'
                                            placeholder='Confirm Password'
                                            value={this.state.passwordConf}
                                            name='passwordConf'
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <Button
                                    type='submit'
                                    color='primary'
                                    disabled={this.isFormInvalid()}
                                    handleSubmit={this.handleSubmit}
                                    onClick={this.props.toggleSignUpModal}
                                    isOpen={this.props.signUpModalIsOpen}
                                >Sign Up</Button>
                                <Button
                                    onClick={this.props.toggleSignUpModal}
                                    isOpen={this.props.signUpModalIsOpen}
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

export default SignUp;