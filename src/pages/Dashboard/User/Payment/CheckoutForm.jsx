import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../components/Hook/useAxious';
import { AuthContext } from '../../../../Providers/AuthProvider';
import './paymentStyle.css'

const CheckoutForm = ({ cart, price }) => {

    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price})
            .then(res =>{
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }

    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log(card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || "Unknown"
                    },
                },
            },
        );

        if (confirmError) {
            console.log('payment', confirmError);
        }
        console.log('==', paymentIntent);
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                selectedClassItems: cart.map(item => item._id),
                classItemId: cart.map(item => item.classItemId),
                classImage: cart.map(item => item. classImage),
                itemNames: cart.map(item => item.classTitle)
            }


            fetch('http://localhost:5000/payments', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your payment is successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }
    }

    return (
        <>
            <form className='mt-10' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='bg-yellow-500 text-lg border-b-4 border-0 border-black w-[30%]
                rounded-lg my-10 py-2 hover:bg-slate-300 cursor-pointer' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600 text-lg'> {cardError}</p>
            }
            {
                transactionId && <p className='text-green-600 text-lg'>
                    Transaction id : {transactionId}
                </p>
            }
        </>
    );
};

export default CheckoutForm;