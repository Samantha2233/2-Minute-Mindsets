import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './SubscriptionSuccess.scss'

const SubscriptionSuccess = (props) => {
    return (
        <div>
            <Modal isOpen={props.thankYouModalIsOpen}>
                <ModalHeader className='thankyou-hdr'>
                    Thanks for Subscribing!
                    <Button
                        onClick={props.toggleThankYouModal}
                        isOpen={props.thankYouModalIsOpen}
                        id='cancel'

                    ><img id="exit-thankyou" src='../../../images/Exit-icon-purple.png' alt='exit icon'></img>
                    </Button>
                </ModalHeader>
                <ModalBody className='thankyou-body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </ModalBody>
            </Modal>
        </div>
    )
}

export default SubscriptionSuccess;