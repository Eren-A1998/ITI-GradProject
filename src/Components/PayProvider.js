import {StripeProvider} from '@stripe/stripe-react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import PayPage from './PayPage'
import PendingPay from './pendingPay'

const PayProvider = (props) => 
{
  const {route} = props;
  const {flag, item} = route.params;
  if(flag) //pay
  {
    return (
      <StripeProvider
        publishableKey="pk_test_51J3SJQCn1gZRGcxz49CjzOoJgMFTN2TuziQwCn9V9qkfUH00zT2lWlJY66erei6ybhC34vM2CIDPetJQYTS8DzFH00iJCyaLjy">
        <SafeAreaView>
          <PayPage nav = {props.navigation} />
        </SafeAreaView>
      </StripeProvider>
    );
  }

  //pending pay
  return (
    <StripeProvider
      publishableKey="pk_test_51J3SJQCn1gZRGcxz49CjzOoJgMFTN2TuziQwCn9V9qkfUH00zT2lWlJY66erei6ybhC34vM2CIDPetJQYTS8DzFH00iJCyaLjy">
      <SafeAreaView>
        <PendingPay nav = {props.navigation} item={item} />
      </SafeAreaView>
    </StripeProvider>
  );
};

export default PayProvider