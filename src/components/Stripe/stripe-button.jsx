import React from 'react'
import { connect } from "react-redux"
import Swal from 'sweetalert2'
import StripeCheckout from 'react-stripe-checkout'
import { removeAllItems } from '../../Redux/Cart/cart.actions'



const StripeButton = ({ price , removeAllItems}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GtT6REG60pL9LLKS9OU4fum817gXi2wIdqnuzum0XjwwW18bD9zHShhPLssLlMjBmdyYa53RP26h6ShbZ8o3VTn00CZmUz1IP';

    const onToken = token => {
        console.log(token);
        Swal.fire({
            icon: 'success',
            title: 'Payment Successful',
        });
        removeAllItems();
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Ecommerce Store'
            ComponentClass="div"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}



        >
         <button className="btn btn-outline-primary-2 btn-order btn-block"><span>&#128179;</span>SUBMIT PAYMENT</button>

        </StripeCheckout>
    )
}

const mapDispatchToProps =(dispatch) =>({
    removeAllItems: () => dispatch(removeAllItems())
})

export default connect(null, mapDispatchToProps) (StripeButton);