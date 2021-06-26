import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconf from 'react-native-vector-icons/Entypo';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import {getUserTrips} from '../Redux/actions/tripActions'
import { useEffect,useState } from 'react';
import {getStation} from '../Algorithm/BookingAlgo';
import{getLines} from '../Redux/actions/Lines'


const UpcomingTrips = (props)=> {
 //const {Lines,setLines} =  useState([]);
  const {usertrips} = props;
  const {lines} = props;
useEffect(()=>{
    props.getUserTrips(1);
    props.getLines()
},[]);

  const RenderItem = ({ item }) =>{
    var today =  new Date(item.date);
    console.log(today)
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date)
    
    var time = today.getHours() + ":" + today.getMinutes();
    console.log(time)
    


    console.log(usertrips)
    console.log(lines)
    console.log(item)
   let from  =  getStation(item.from,item.fromLine,lines).Name;
   let to  =  getStation(item.to,item.toLine,lines).Name;
 return (
    
    <View style={styles.item}>
      <View style = {{flexDirection:'row'}}>
        <View>
          <Text style = {styles.Date}> {date} </Text>
          <Text style = {styles.Time}> {time} </Text>
        </View>

        <View style = {{marginLeft:10}}>
          <Iconf name={"dots-three-vertical"} size={50} color = "#FF8303"></Iconf>
        </View>

        <View>
          <Text style = {styles.From}> {from} </Text>
          <Text style = {styles.To}> {to} </Text>
        </View>
      </View>

      <View style={{flexDirection:'row', marginTop:15}}>
        <Text style={styles.Code}> {item.ID.substring(0,4)}</Text> 
        <Icon name="cash" size={30} color="green"></Icon>
        <Text style={styles.Price}> {item.price} EGP </Text>
        <Text style={styles.Status}> {item.payStatus}</Text> 
      </View>
    </View>
  );}
  if(usertrips&&lines){
    lines.sort(function (a, b) { return a.Number - b.Number });
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={usertrips}
        renderItem={RenderItem}
        keyExtractor={item => item.date}/>
    </SafeAreaView>    
  );
}else{
  return(
  <View><Text>No Data To Show</Text></View>);
}
};

const styles = StyleSheet.create
({
  container: 
  {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: 
  {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  Date:
  {
    fontFamily: 'Arial',
    fontSize:15,
    color:"gray"
  },

  Time:
  {
    fontFamily: 'Arial',
    fontSize:17,
  },   
  
  From:
  {
    fontFamily: 'Arial',
    fontSize:18,
    marginTop:-3,
  },

  To:
  {
    fontFamily: 'Arial',
    fontSize:18,
    marginTop:11,
  },

  Price:
  {
    fontFamily: 'Arial',
    fontSize: 15,
    color:'black',
    marginTop:5,
  },

  Status:
  {
    marginLeft:50,
    marginTop:7,
    fontSize:15,
    color:"gray",
    fontWeight:'bold',
    letterSpacing:2

  },

  Code:
  {
    marginTop:4,
    marginRight:80,
    fontSize:15,
    color:"gray",
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getUserTrips,getLines}, dispatch)
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    usertrips: state.tripReducer.usertrips,
    lines:state.LineReducer.Lines
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingTrips);