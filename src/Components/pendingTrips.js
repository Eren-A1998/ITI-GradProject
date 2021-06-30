import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconf from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getPendingTrips,clearPendingTrips } from '../Redux/actions/tripActions'
import { getStation } from '../Algorithm/BookingAlgo';
import { getLines } from '../Redux/actions/Lines';
import { PacmanIndicator } from 'react-native-indicators';
import Iconi from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';


const pendingTrips = (props) => {
  const [Stop, setStop] = useState(false);
  const { pendingtrips } = props;
  const { lines } = props;
  const {currentuser}=props


  useFocusEffect(
    React.useCallback (() => {
    
    props.getPendingTrips(currentuser.id);
    props.getLines()
    return ()=>{props.clearPendingTrips()}

  }, []));

  const RenderItem = ({ item }) => {
    var today = new Date(item.date);
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var Hours = today.getHours();
    var Mins = today.getMinutes();
    var time = ("0" + Hours).slice(-2) + ":" + ("0" + Mins).slice(-2);

    let ExpDate = new Date(item.Expdate);
    let Expire = false;
    if (today >= ExpDate) {
      Expire = true;
      item.payStatus = "Expired";
      let obj = { payStatus: "Expired" }
      let id = item.ID;
    }

    let from = getStation(item.from, item.fromLine, lines).Name;
    let to = getStation(item.to, item.toLine, lines).Name;
    return (
      <TouchableOpacity disabled={Expire} underlayColor="#BDC3CB"
      
      onPress={async() => {
         await props.navigation.replace('Pay',{item});
      }}>
      <View style={[styles.item, Expire ? styles.expireItem : styles.item]}>
        {/* <View style={{ flexDirection: 'row' }}>
          <Iconf name="back-in-time" size={20} color="#157DEC" style={{ marginLeft: "40%" }}></Iconf>
          <Text style={styles.Time}> {time} </Text>
        </View> */}

        <View style={{ flexDirection: 'row' }}>
        <Iconi
            details
              onPress={()=>{ props.navigation.navigate('info',{item,lines}) }}
              name='information-circle-sharp'
              size={22}
              style={{alignSelf:'center'}}
              color='#0074B7'></Iconi>

          <View style={{ marginLeft: -5 }}>
            <Iconf name={"dots-three-vertical"} size={50} color="#FF8303"></Iconf>
          </View>

          <View>
            <Text style={styles.From}> {from} </Text>
            <Text style={styles.To}> {to} </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View>
            <Text style={styles.Date}> {date} </Text>
          </View>

          <Icon name="cash" size={30} color="green" style={{ marginLeft: 40 }}></Icon>
          <Text style={styles.Price}> {item.price} EGP </Text>
          <Text style={styles.Status}> {item.payStatus}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }

  if (pendingtrips?.length && lines) {
    lines.sort(function (a, b) { return a.Number - b.Number });
    pendingtrips.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={pendingtrips}
          renderItem={RenderItem}
          keyExtractor={item => item.ID} />
      </SafeAreaView>
    );
  }

  else {
  let x =   setTimeout(() => {
      setStop(true);
    }, 5000);

    if(Stop == false)
    {
      return (
        <PacmanIndicator color='orange' size={130} />
      );
    }
    else
    {
clearTimeout(x);

      return(
        <View style={{flex: 1, 
          alignItems: 'center',
          justifyContent: 'center', }}>
          <Text style={{fontWeight:'bold' , fontSize:20}}>No Trips till now</Text>
        </View>
      )
    }
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

    expireItem:
    {
      backgroundColor: '#C0C0C0',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },

    Date:
    {
      fontFamily: 'Arial',
      fontSize: 15,
      color: "gray",
      marginTop: 4,
      marginLeft: -5,
      letterSpacing: 2,
    },

    Time:
    {
      fontFamily: 'Arial',
      fontSize: 17,
      marginBottom: 15
    },

    From:
    {
      fontFamily: 'Arial',
      fontSize: 18,
      marginTop: -3,
    },

    To:
    {
      fontFamily: 'Arial',
      fontSize: 18,
      marginTop: 11,
    },

    Price:
    {
      fontFamily: 'Arial',
      fontSize: 15,
      color: 'black',
      marginTop: 5,
    },

    Status:
    {
      marginLeft: 40,
      marginTop: 5,
      fontSize: 15,
      color: "gray",
      fontWeight: 'bold',
      letterSpacing: 2
    },
  });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPendingTrips, getLines,clearPendingTrips }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    pendingtrips: state.tripReducer.pendingtrips,
    lines: state.LineReducer.Lines,
    currentuser:state.UserReducer.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(pendingTrips);