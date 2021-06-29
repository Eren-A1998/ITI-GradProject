import { CardField, useStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
import { bindActionCreators } from 'redux';
import { updateTrip } from '../Redux/actions/tripActions'
import { Button } from 'react-native-elements';

const PayPage = (props) => {
  const [Show, setShow] = useState(false);
  const [Show1, setShow1] = useState(false);
  const [Ssms, setSsms] = useState("");
  const [Fsms, setFsms] = useState("");
  const [key, setKey] = useState('');

  const Open = () => {
    setShow(true);
  }
 
  const handleClose = () => {
    setTimeout(() => {
      setShow(false);
    }, 500);
    setTimeout(()=>{
      nav.navigate("TripsHistory")
    },1000)
    
  }
  const handleClose2 = () => {
    nav.navigate("Home")
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
  useEffect(() => {
    let Price = props.trip.tripPrice
    fetch('http://192.168.1.7:3000/create-payment-intent', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ Price })
    })
      .then(res => res.json())
      .then(res => {
        setKey((res as { clientSecret: string }).clientSecret);
      })
      .catch(e => Alert.alert(e.message));

    return () => { console.log("Out") }
  }, []);

  const handleConfirmation = async () => {
    if (key) {
      const { paymentIntent, error } = await confirmPayment(key, {
        type: 'Card',
        billingDetails: {
          name: 'EnglishCustomer',
          email: 'EnglishCustomer@gmail.com',
        },
      });

      if (!error) {
        const { trip } = props;
        let obj = { price: trip.tripPrice, payStatus: "Paid" }
        let id = trip.trip.tripID
        props.updateTrip(obj, id)
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
        onRequestClose={handleClose}
        >
        <SCLAlertButton theme="inverse" onPress={handleClose2}>Done</SCLAlertButton>
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
        // placeholder={{
        //   number: '4242 4242 4242 4242',
        // }}
        cardStyle={styles.cardStyle}
        style={styles.cStyle}
      />
      <View style={{marginTop:15}}>
        <Button buttonStyle={styles.Pay} title="Confirm payment" onPress={handleConfirmation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create
  ({
    Pay:
    {
      backgroundColor: '#0074B7',
      alignSelf: 'center',
      width:'50%',
      height:50,
      borderRadius:50,
    },
    cardStyle:
    {
      backgroundColor: '#B9B7BD',
      color: '#000000',
      fontSize:20,
      borderRadius: 30,
    },
    cStyle:
    {
      width: "95%",
      height: 50,
      marginTop: "50%",
      marginLeft:10,
      
      marginBottom: 10
    }
  })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateTrip }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    trip: state.tripReducer,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayPage);