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
    lines.sort(function (a, b) { return a.Number - b.Number });
    lines.pop();
    let path = getShortestPath(trip.from, trip.to, trip.fromLine, trip.toLine, lines);
    console.log("path",path);
    console.log("trip",trip);
    console.log("lines",lines);
    let Price = props.getTripPrice(path,trip).payload;
    return (
      <View>
        <Button title="Paaaay" onPress={() => { props.navigation.navigate('Pay') }}></Button>
      </View>

    );
  }   
  else
  {
    return (
      <PacmanIndicator color='orange' size={130} />
    );
  }

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTripPrice }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    trip: state.tripReducer.trip,
    lines: state.LineReducer.Lines,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationDetails);
