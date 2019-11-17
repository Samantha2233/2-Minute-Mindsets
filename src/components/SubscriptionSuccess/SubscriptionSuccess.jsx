import React from 'react';
import { Button, Modal } from 'reactstrap';
import './SubscriptionSuccess.scss'

const SubscriptionSuccess = (props) => {
    return (
        <div>
            <Modal id='thankyou-modal' isOpen={props.thankYouModalIsOpen}>
                <div className='thankyou-hdr'>
                    <h5>Thanks for Subscribing!</h5>
                    <Button
                        onClick={props.toggleThankYouModal}
                        isOpen={props.thankYouModalIsOpen}
                        id='cancel'

                    ><img id="exit-thankyou" src='../../../images/Exit-icon-purple.png' alt='exit icon'></img>
                    </Button>
                </div>
                <div className='thankyou-body'>
                    You now have access to a guide of simple wisdom that, with a little effort and consistency, will help you build habits that will lead you to living a more intentional life.
                </div>

                <img id='lights-in-hand' src='../../../images/lights-in-hand.jpeg' alt='Shot by Diego PH' />

            </Modal>
        </div>
    )
}

export default SubscriptionSuccess;