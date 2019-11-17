import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import './SignUp.scss';

class SignUp extends Component {
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
                        <Form onSubmit={this.props.handleSubmit}>
                            <div>
                                <div>
                                    <Input
                                        type='text'
                                        placeholder='Name'
                                        value={this.props.name}
                                        name='name'
                                        onChange={this.props.handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Input
                                        type='email'
                                        placeholder='Email'
                                        value={this.props.email}
                                        name='email'
                                        onChange={this.props.handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Input
                                        type='password'
                                        placeholder='Password'
                                        value={this.props.password}
                                        name='password'
                                        onChange={this.props.handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Input
                                        type='password'
                                        placeholder='Confirm Password'
                                        value={this.props.passwordConf}
                                        name='passwordConf'
                                        onChange={this.props.handleChange}
                                    />
                                </div>
                            </div>
                            <div className='button-box'>
                                <Button
                                    type='submit'
                                    outline color='primary'
                                    disabled={this.props.isFormInvalid()}
                                    handleSubmit={this.props.handleSubmit}
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
                        <p>{this.props.message}</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default SignUp;