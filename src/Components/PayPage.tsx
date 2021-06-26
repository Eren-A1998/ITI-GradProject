import { CardField, useStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { Alert, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
import { bindActionCreators } from 'redux';
import {updateTrip} from '../Redux/actions/tripActions'

const PayPage = (props) => {
  const [Show, setShow] = useState(false);
  const [Show1, setShow1] = useState(false);
  const [Ssms, setSsms] = useState("");
  const [Fsms, setFsms] = useState("");
  const Open = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  const Open1 = () => {
    setShow1(true);
  }

  const handleClose1 = () => {
    setShow1(false);
  }
  let { nav } = props
  const { confirmPayment } = useStripe();
  const [key, setKey] = useState('');
  useEffect(() => {
    console.log("hiii")
    let Price = props.trip.tripPrice
    fetch('http://192.168.1.7:3000/create-payment-intent', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ Price })
    })
      .then(res => res.json())
      .then(res => {
        // console.log('intent', res);
        setKey((res as { clientSecret: string }).clientSecret);
        // console.log(key);
      })
      .catch(e => Alert.alert(e.message));

      return ()=>{console.log("Out")}
  }, []);

  const handleConfirmation = async () => {
    console.log("down", nav);
    if (key) {
      const { paymentIntent, error } = await confirmPayment(key, {
        type: 'Card',
        billingDetails: {
          name: 'EnglishCustomer',
          email: 'EnglishCustomer@gmail.com',
        },
      });

      if (!error) {
        /* Update Trip Db */
        const {trip} = props;
       let obj = {price:trip.tripPrice,payStatus:"Paid"}
        let id = trip.trip.tripID
        console.log("Hi Trip",trip);
        props.updateTrip(obj,id)
        setSsms(`Total fees ${paymentIntent?.amount / 200} EGP`);
        Open()
      }
      else {
        setFsms(error.message);
        Open1()
      }
    }
  };

  return (
    <View>
      <SCLAlert
        theme="success"
        show={Show}
        title="Successful process"
        titleStyle={{ color: 'green' }}
        cancellable={false}
        subtitle={Ssms}
        onRequestClose={handleClose}>
        <SCLAlertButton theme="default" onPress={() => { nav.navigate("TripsHistory") }}>Show your trips</SCLAlertButton>
        <SCLAlertButton theme="inverse" onPress={() => { nav.navigate("Home") }}>back to home</SCLAlertButton>
      </SCLAlert>

      <SCLAlert
        theme="danger"
        show={Show1}
        title="Failed process"
        titleStyle={{ color: 'red' }}
        cancellable={false}
        subtitle={Fsms}
        onRequestClose={handleClose1}>
        <SCLAlertButton theme="default" onPress={handleClose1}>Close</SCLAlertButton>
      </SCLAlert>

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
      />
      <Button title="Confirm payment" onPress={handleConfirmation} />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateTrip }, dispatch)
}

const mapStateToProps = (state) => {
  console.log("s", state.tripReducer);
  return {
    trip: state.tripReducer,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayPage);
