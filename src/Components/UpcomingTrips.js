import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconf from 'react-native-vector-icons/Entypo';

const DATA = [
  {
    From: 'Sadat',
    To: 'Helwan',
    Date:"10/05/2021",
    Time: "5:11 PM",
    Price:7,
    Status:"Completed",
    Code:"K075",
  },
  {
    From: 'Marg',
    To: 'Helmea',
    Date:"10/04/2021",
    Time: "4:20 PM",
    Price:5,
    Status:"Canceled",
    Code:"J11F",
  },
  {
    From: 'Haroun',
    To: 'Abbasya',
    Date:"01/06/2021",
    Time: "11:05 PM",
    Price:5,
    Status:"Completed",
    Code:"X05K",
  },
  {
    From: 'Sadat',
    To: 'Helwan',
    Date:"10/05/2021",
    Time: "5:11 PM",
    Price:7,
    Status:"Completed",
    Code:"F1LM",
  },
  {
    From: 'Marg',
    To: 'Helmea',
    Date:"10/04/2021",
    Time: "4:20 PM",
    Price:5,
    Status:"Canceled",
    Code:"K075",
  },
  {
    From: 'Haroun',
    To: 'Abbasya',
    Date:"01/06/2021",
    Time: "11:05 PM",
    Price:5,
    Status:"Completed",
    Code:"K075",
  },
  {
    From: 'Sadat',
    To: 'Helwan',
    Date:"10/05/2021",
    Time: "5:11 PM",
    Price:7,
    Status:"Completed",
    Code:"K075",
  },
  {
    From: 'Marg',
    To: 'Helmea',
    Date:"10/04/2021",
    Time: "4:20 PM",
    Price:5,
    Status:"Canceled",
    Code:"K075",
  },
  {
    From: 'Haroun',
    To: 'Abbasya',
    Date:"01/06/2021",
    Time: "11:05 PM",
    Price:5,
    Status:"Completed",
    Code:"K075",
  },
];

const UpcomingTrips = ()=> {
  const RenderItem = ({ item }) => (
    <View style={styles.item}>
      <View style = {{flexDirection:'row'}}>
        <View>
          <Text style = {styles.Date}> {item.Date} </Text>
          <Text style = {styles.Time}> {item.Time} </Text>
        </View>

        <View style = {{marginLeft:10}}>
          <Iconf name={"dots-three-vertical"} size={50} color = "#FF8303"></Iconf>
        </View>

        <View>
          <Text style = {styles.From}> {item.From} </Text>
          <Text style = {styles.To}> {item.To} </Text>
        </View>
      </View>

      <View style={{flexDirection:'row', marginTop:15}}>
        <Text style={styles.Code}> {item.Code}</Text> 
        <Icon name="cash" size={30} color="green"></Icon>
        <Text style={styles.Price}> {item.Price} EGP </Text>
        <Text style={styles.Status}> {item.Status}</Text> 
      </View>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={item => item.Code}/>
    </SafeAreaView>    
  );
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
  },

  Code:
  {
    marginTop:4,
    marginRight:80,
    fontSize:15,
    color:"gray",
  },
});

export default UpcomingTrips;