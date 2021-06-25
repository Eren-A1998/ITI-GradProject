import {
  CardField,
  StripeProvider,
  useStripe,
} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, Button, SafeAreaView, View} from 'react-native';

interface AppProps {}

const PayPage: React.FC<AppProps> = () => {
  return (
    <StripeProvider
      publishableKey="pk_test_51J3SJQCn1gZRGcxz49CjzOoJgMFTN2TuziQwCn9V9qkfUH00zT2lWlJY66erei6ybhC34vM2CIDPetJQYTS8DzFH00iJCyaLjy">
      <SafeAreaView>
        <StripeTest />
      </SafeAreaView>
    </StripeProvider>
  );
};

const StripeTest: React.FC = () => {
  const {confirmPayment} = useStripe();
  const [key, setKey] = useState('');

  useEffect(() => {
    fetch('http://192.168.1.7:3000/create-payment-intent', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(res => {
        console.log('intent', res);
        setKey((res as {clientSecret: string}).clientSecret);
        console.log(key);
      })
      .catch(e => Alert.alert(e.message));
  }, []);

  const handleConfirmation = async () => {
    if (key) {
      const {paymentIntent, error} = await confirmPayment(key, {
        type: 'Card',
        billingDetails: {
          name:'EnglishCustomer',
          email: 'EnglishCustomer@gmail.com',
        },
      });

      if (!error) {
        /* Update Trip Db */
        Alert.alert('Received payment', `Billed for ${paymentIntent?.amount}`);
        console.log('cardDetails', paymentIntent);
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        // onCardChange={cardDetails => {
        //   console.log('cardDetails', cardDetails);
        // }}
        // onFocus={focusedField => {
        //   console.log('focusField', focusedField);
        // }}
      />
      <Button title="Confirm payment" onPress={handleConfirmation} />
    </View>
  );
};

export default PayPage;
