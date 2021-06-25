import React from 'react';
import {Text, View ,Button} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
 import{getShortestPath} from '../Algorithm/BookingAlgo' 


const ReservationDetails = (props)=> {
    const {trip} = props;
    const {lines} = props;
    
    if(lines&&trip){
    
    
   


   let path =   getShortestPath(trip.from,trip.to,trip.fromLine,trip.toLine,lines);
   console.log(path)
    
    return (
     <View>
         <Button title="Paaaay" onPress={()=>{props.navigation.navigate('Pay')}}></Button>
     </View>
     
    );}else{
        return(
        <View><Text>Waiiiiiiit</Text></View>
        );
    }
    
  };
  
  const mapStateToProps = (state) => {
    console.log("From Here",state)

        console.log("From Here",state.tripReducer.trip)
        
    return {
      trip: state.tripReducer.trip,
      lines: state.LineReducer.Lines,
    }
  }

  export default  connect(mapStateToProps, null)(ReservationDetails) ;
  