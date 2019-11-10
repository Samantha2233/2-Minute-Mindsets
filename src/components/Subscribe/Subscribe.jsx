import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './Subscribe.scss';

class Subscribe extends Component {
    state = {
        formData: {
            name: '',
            email: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleEmailSubmission(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData
        });
    }

    render() {
        return (
            <div className='black-background'>

                <div id='subscribe'>
                    <div className='box'>
                        <h2>Great Living Comes from <br></br>Building the Habit</h2>
                        <p>Get an email when we post a new 2 minute mindset every week!</p>

                        <Form id="subscribe-form" onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input
                                    value={this.state.formData.name}
                                    onChange={this.handleChange}
                                    type='name'
                                    name='name'
                                    id='name'
                                    placeholder='name'
                                    required
                                />
                                <Input
                                    value={this.state.formData.email}
                                    onChange={this.handleChange}
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='email'
                                    required
                                />
                            </FormGroup>
                            <Button
                                outline color='primary'
                                type='submit'
                            >Submit</Button>
                        </Form>
                    </div>
                    <img id='blue-flower' src='../../../images/blue-flower.jpeg' alt='Vladimir Malyutin on Unsplash' />
                </div>
            </div>
        )
    }
}

export default Subscribe;

