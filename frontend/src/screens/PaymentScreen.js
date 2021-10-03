import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const PaymentScreen = ({ history }) => {
    
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                
                <Col>
                    <Form.Check 
                    type='radio' 
                    label='PayPal or credit Cart' 
                    id='PayPal' name='paymentMethod' 
                    value='PayPal' 
                    checked 
                    onChange={(e) => {
                        setPaymentMethod(e.target.value)
                    }}></Form.Check>
                    <Form.Check 
                    type='radio' 
                    label='Stripe' 
                    id='Stripe' name='paymentMethod' 
                    value='Stripe' 
                    checked 
                    onChange={(e) => {
                        setPaymentMethod(e.target.value)
                    }}></Form.Check>
                </Col>
                </Form.Group>
                <Button type='submit' vatiant='promary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}


export default PaymentScreen