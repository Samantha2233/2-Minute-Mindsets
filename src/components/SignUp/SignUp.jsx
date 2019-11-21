import React, { Component } from 'react';
import userService from '../../utils/userService';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import './SignUp.scss';

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: '',
        message: ''
    }

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
        } catch (err) {
            this.updateMessage(err.message);
        } finally {
            this.props.handleSignUpOrLogIn();
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.signUpModalIsOpen}
                    className='sign-up-form'
                >
                    <ModalHeader className='sign-up-form'>
                        Sign Up

                        </ModalHeader>
                    <ModalBody className='sign-up-form'>
                        <Form onSubmit={this.handleSubmit}>
                            <div>
                                <div>
                                    <Input
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
                            <div>
                                <div>
                                    <Input
                                        type='password'
                                        placeholder='Confirm Password'
                                        value={this.state.passwordConf}
                                        name='passwordConf'
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
                                    onClick={this.props.toggleSignUpModal}
                                    isOpen={this.props.signUpModalIsOpen}
                                >Sign Up</Button>
                                <Button
                                    onClick={this.props.toggleSignUpModal}
                                    isOpen={this.props.signUpModalIsOpen}
                                    id="cancel"
                                >Cancel</Button>
                            </div>
                        </Form>
                        <p className='error'>{this.state.message}</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default SignUp;