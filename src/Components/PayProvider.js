import {StripeProvider} from '@stripe/stripe-react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import PayPage from './PayPage'
const PayProvider = (props) => 
{
  return (
    <StripeProvider
      publishableKey="pk_test_51J3SJQCn1gZRGcxz49CjzOoJgMFTN2TuziQwCn9V9qkfUH00zT2lWlJY66erei6ybhC34vM2CIDPetJQYTS8DzFH00iJCyaLjy">
      <SafeAreaView>
        <PayPage nav = {props.navigation} />
      </SafeAreaView>
    </StripeProvider>
  );
};

export default PayProvider