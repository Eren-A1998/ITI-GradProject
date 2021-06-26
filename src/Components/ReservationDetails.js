import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import{getTripPrice} from '../Redux/actions/tripActions'
import { getShortestPath} from '../Algorithm/BookingAlgo'
import { bindActionCreators } from 'redux'
import {PacmanIndicator} from 'react-native-indicators';

const ReservationDetails = (props) => {
  const { trip } = props;
  const { lines } = props;

  if (lines && trip) 
  {
    let path = getShortestPath(trip.from, trip.to, trip.fromLine, trip.toLine, lines);
    console.log(path);
    console.log(trip);
    let Price = props.getTripPrice(path,trip).payload;
    console.log(path.length);
    console.log(Price);
    return (
      <View>
        <Button title="Paaaay" onPress={() => { props.navigation.navigate('Pay') }}></Button>
      </View>

    );
  }   
  else
  {
    return (
      <PacmanIndicator color='orange' />
    );
  }

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTripPrice }, dispatch)
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    trip: state.tripReducer.trip,
    lines: state.LineReducer.Lines,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationDetails);
