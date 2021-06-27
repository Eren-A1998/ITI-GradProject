import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {getTripPrice} from '../Redux/actions/tripActions';
import {getShortestPath,getColor} from '../Algorithm/BookingAlgo';
import {bindActionCreators} from 'redux';
import {PacmanIndicator} from 'react-native-indicators';
import Icon from 'react-native-vector-icons/Fontisto';
import Iconf from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

const ReservationDetails = props => {
  const {trip} = props;
  const {lines} = props;

  if (lines && trip) {
    lines.sort(function (a, b) {
      return a.Number - b.Number;
    });
    if (lines.length != 3) lines.pop();
    let path = getShortestPath(
      trip.from,
      trip.to,
      trip.fromLine,
      trip.toLine,
      lines,
    );
    let res;
  
    let Price = props.getTripPrice(path, trip).payload;
   if(trip.fromLine==3||trip.toLine==3)
     res= getColor(Price," ");
     else res = getColor(Price);
    return (
      <View>
        <Icon
          name={'ticket-alt'}
          size={150}
          style={{marginVertical: 15, alignSelf: 'center'}}
          color={res}></Icon>
          
          <Text style={{fontSize:20,alignSelf:'center'}}>{Price} EGP</Text>


    <View style={{backgroundColor:'#E0E7FF',marginTop:20,marginBottom:25}}>
      <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
      

          {path.map((p,i)=>{ 
          return(
            <View style={styles.item} key={i+"k"}>
              <Iconf
              name={'dot-circle'}
              size={33}
              style={{marginVertical: 15,alignSelf:'center'}}
              color={i==0||i==path.length-1?'green':p.Flag==trip.fromLine||p.Flag==trip.toLine?'red':'blue'}></Iconf>
           <Text style={{...styles.num , color:i==0||i==path.length-1?'green':p.Flag==trip.fromLine||p.Flag==trip.toLine?'red':'blue'}}> {i+1}</Text>
           <Text style={styles.name}>{p.Name}</Text>
            </View>
         );
        
        }  )} 
      </ScrollView>
    </View>
          <View style={{marginBottom:35}}>
          <View style={{marginLeft:15,flexDirection:'row'}}>
          <Iconf
              name={'dot-circle'}
              size={20}
              style={{marginHorizontal: 7 , marginVertical:8}}
              color={'blue'}></Iconf>
              <Text style={{marginTop:6}}>Normal Station</Text>

              <View style={{marginLeft:10, flexDirection:'row'}}>
          <Iconf
              name={'dot-circle'}
              size={20}
              style={{marginHorizontal: 7 , marginVertical:8}}
              color={'red'}></Iconf>
              <Text style={{marginTop:6}}>Line Switch</Text>
          </View>
          <View style={{marginLeft:10,flexDirection:'row'}}>
          <Iconf
              name={'dot-circle'}
              size={20}
              style={{marginHorizontal: 7 , marginVertical:8}}
              color={'green'}></Iconf>
              <Text style={{marginTop:6}}>Start & End</Text>
          </View>
          </View>
         
          
              
          </View>
        <Button
          buttonStyle={styles.Pay}
          title="Pay Now"
          onPress={() => {
            props.navigation.navigate('Pay');
          }}></Button>
      </View>
    );
  } else {
    return <PacmanIndicator color="orange" size={130} />;
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getTripPrice}, dispatch);
};

const mapStateToProps = state => {
  return {
    trip: state.tripReducer.trip,
    lines: state.LineReducer.Lines,
  };
};

const styles = StyleSheet.create({
  item:{
     paddingVertical:10,
    paddingHorizontal:25,
  },
  name:{
    alignSelf:'center',
    fontFamily: 'serif',
    fontSize:15,
    fontWeight:'bold'
  }, 
  num:{
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold',
    marginBottom:5
  },
  Pay: {
    backgroundColor: '#F87431',
    alignSelf: 'center',
    borderRadius: 10,
    width:"30%"
  },
  path:{ 
    width:'75%',
    
    backgroundColor:'green'
  },
  scroll:{alignSelf:'center'}
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationDetails);
