import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JMvYrCYAFDOk6O8BjHidVKs6bTa6xErOOI0V9Ou9MZNlz1nH6dC0wG1oWWTWx3HQPujs9BU6OmPJ6JcWnUiVI7y00AwjoqSsz',

    onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
           lable = 'Pay Now'
           name = 'Crown Clothing Ltd'
           description = {`Your total is $${price}`}
           bitoin = {true}
           billingAddress
           shippingAddress
           amount = {priceForStripe}
           panelLabel = 'Pay Now'
           token = {onToken}
           stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton