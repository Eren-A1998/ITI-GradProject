import {CardField, useStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import {updateTrip} from '../Redux/actions/tripActions';
import {Button} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PendingPay = props => {
  const [Show1, setShow1] = useState(false);
  const [Show, setShow] = useState(false);
  const [Ssms, setSsms] = useState('');
  const [Fsms, setFsms] = useState('');
  const [key, setKey] = useState('');

  const {nav} = props;
  const handleClose = async () => {
    await nav.goBack();
    await nav.goBack();
    setShow(false);
  };

  const Open = () => {
    setShow(true);
  };

  const Open1 = () => {
    setShow1(true);
  };

  const handleClose1 = () => {
    setShow1(false);
  };

  let {item} = props;
  const {confirmPayment} = useStripe();
  useEffect(() => {
    let Price = item.price;
    fetch('http://192.168.1.7:3000/create-payment-intent', {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({Price}),
    })
      .then(res => res.json())
      .then(res => {
        setKey((res as {clientSecret: string}).clientSecret);
      })
      .catch(e => Alert.alert(e.message));
  }, []);

  const handleConfirmation = async () => {
    if (key) {
      const {paymentIntent, error} = await confirmPayment(key, {
        type: 'Card',
        billingDetails: {
          name: 'EnglishCustomer',
          email: 'EnglishCustomer@gmail.com',
        },
      });

      if (!error) {
        let obj = {payStatus: 'Paid'};
        let id = item.ID;
        await updateTrip(obj, id);
        setSsms(`Total fees ${paymentIntent?.amount / 200} EGP`);
        Open();
      } else {
        setFsms(error.message);
        Open1();
      }
    }
  };

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View>
        <SCLAlert
          theme="success"
          show={Show}
          title="Successful process"
          titleStyle={{color: 'green'}}
          cancellable={false}
          subtitle={Ssms}
          onRequestClose={handleClose}>
          <SCLAlertButton theme="inverse" onPress={handleClose}>
            Done
          </SCLAlertButton>
        </SCLAlert>

        <SCLAlert
          theme="danger"
          show={Show1}
          title="Failed process"
          titleStyle={{color: 'red'}}
          cancellable={false}
          subtitle={Fsms}
          onRequestClose={handleClose1}>
          <SCLAlertButton theme="default" onPress={handleClose1}>
            Close
          </SCLAlertButton>
        </SCLAlert>

        <CardField
          postalCodeEnabled={false}
          cardStyle={styles.cardStyle}
          style={styles.cStyle}
        />
        <View style={{marginTop: 15}}>
          <Button
            buttonStyle={styles.Pay}
            title="Confirm payment"
            onPress={handleConfirmation}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  Pay: {
    backgroundColor: '#0074B7',
    alignSelf: 'center',
    width: '50%',
    height: 50,
    borderRadius: 50,
  },
  cardStyle: {
    backgroundColor: '#B9B7BD',
    color: '#000000',
    fontSize: 20,
    borderRadius: 30,
  },
  cStyle: {
    width: '95%',
    height: 50,
    marginTop: '50%',
    marginLeft: 10,

    marginBottom: 10,
  },
});

export default PendingPay;
