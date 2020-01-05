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

    handleSubmit = async e => {
        e.preventDefault();
        await this.props.handleEmailSubmission(this.state.formData);
        // Clear formm if successful 
        this.setState(state => ({
            formData: { name: '', email: '' }
        }))
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
                        <h2>Great Living Comes <br></br>from Building the Habit</h2>
                        <p>Get an email when we post a new 2 minute mindset, as well as free offers!</p>

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
                                type='submit'
                                id='subscribe-btn'
                            >Subscribe</Button>
                        </Form>
                    </div>
                    <img id='blue-flower' src='../../../images/blue-flower.jpeg' alt='Vladimir Malyutin on Unsplash' />
                </div>
            </div>
        )
    }
}

export default Subscribe;

