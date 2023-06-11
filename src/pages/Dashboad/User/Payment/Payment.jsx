import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useClassQuery from '../../../../components/Hook/useClassQuery';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Payment = () => {

    const [cart] = useClassQuery();
    const total = cart.reduce((sum, item)=> sum + item.price , 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <section>
            <div className='my-10'>
                <div className='flex justify-center items-center gap-5'>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        Please Proceed To Payment
                    </h1>
                </div>
                <div className='mx-auto border-b-2 pb-5 w-[500px]'>
                </div>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </section>
    );
};

export default Payment;