import React, { useContext, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../PaymentPage.css'

//icons
import LockIcon from '@mui/icons-material/Lock';
import DoneIcon from '@mui/icons-material/Done';

export default function PaymentPage() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const publicKey = 'pk_test_dbafcca1913b97098960d18d0b4d3d3d5d36b91c'; // Replace with your Paystack public key
  const amount = 5000 * 100; // Amount in kobo (e.g., 5000 NGN)
  const email = userInfo.email;
  const currency = 'ZAR'

  const onSuccess = async (reference) => {
    console.log('Payment successful:', reference);
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        { isPaid: true },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('Payment successful! Your account is now active.');
    } catch (err) {
      toast.error('Error updating payment status.');
    }
  };

  const onClose = () => {
    console.log('Payment dialog closed.');
  };

  const componentProps = {
    email,
    amount,
    currency,
    publicKey,
    text: 'Pay Now',
    onSuccess,
    onClose,
  };

  return (
    <div className='payment_page' >

      <div className='payment_page_card' >
        <div className='payment_page_card_top' >
          <span>Reccomended</span>
        </div>
        <div className='payment_page_card_center' >
          <div className='payment_page_card_center_con' >
            <div className='payment_page_card_center_con_period' >
              <span>1</span>
            </div>
            <div className='payment_page_card_center_con_month' >
              <span>Month</span>
            </div>
            <div className='payment_page_card_center_con_payment' >
              <span>R180/mon</span>
            </div>
          </div>
          <div className='payment_page_includes' >
            <div className='payment_page_includes_card' >
              <div className='payment_page_includes_card_left' >
                <span><DoneIcon /></span>
              </div>
              <div className='payment_page_includes_card_right' >
                <span>Search users</span>
              </div>
            </div>
            <div className='payment_page_includes_card' >
              <div className='payment_page_includes_card_left' >
                <span><DoneIcon /></span>
              </div>
              <div className='payment_page_includes_card_right' >
                <span>Filters users</span>
              </div>
            </div>
            <div className='payment_page_includes_card' >
              <div className='payment_page_includes_card_left' >
                <span><DoneIcon /></span>
              </div>
              <div className='payment_page_includes_card_right' >
                <span>Get  user Contact</span>
              </div>
            </div>
            <div className='payment_page_includes_card' >
              <div className='payment_page_includes_card_left' >
                <span><DoneIcon /></span>
              </div>
              <div className='payment_page_includes_card_right' >
                <span>And many more </span>
              </div>
            </div>
          </div>
        </div>
        <div className='payment_page_card_bottom' >
          <div className='payment_page_card_bottom_payment' >
            <span><LockIcon /></span><PaystackButton className='payment_page_card_bottom_payment_btn' {...componentProps} />
          </div>
        </div>
      </div>


    </div>
  );
}
