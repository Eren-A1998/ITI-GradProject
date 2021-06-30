import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import CarouselCards from './Home Files/slider';
import {color} from 'react-native-reanimated';
import {Button} from 'native-base';

const Home = props => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      alwaysBounceVertical
      showsVerticalScrollIndicator={false}
      style={styles.home}>
      <ImageBackground
        source={require('../../assets/hpmeImages/bg4.png')}
        style={{width: '100%', height: 185, backgroundColor: '#E3E8E9'}}>
        <Text style={styles.title}>Metro Tickets</Text>
      </ImageBackground>

      <SafeAreaView style={styles.container}>
        <CarouselCards />
      </SafeAreaView>

      <View style={{textAlign: 'left', borderRadius: 100}}>
        <Text style={styles.header}>History</Text>
      </View>

      <View style={{textAlign: 'left', paddingLeft: 30, paddingRight: 10}}>
        {/* style={{ textAlign:'left', height: 200,paddingLeft:30,paddingRight:10, backgroundColor:"#B1D4E0"}}> */}

        <Text style={styles.body}>
          As the biggest and most densely populated city in Africa, and the Arab
          World, the case for a metro in Greater Cairo was strong. In 1987 the
          capacity of Cairo's public transport infrastructure was around 20,000
          passengers per hour, which increased to 60,000 after the construction
          of the Metro. In 1990 a study was conducted for the future needs of
          the city and showed there was a need for about 8.4 million journeys by
          public transport and 2.7 million journeys by other modes, such as taxi
          and car.
        </Text>
      </View>

      <View style={styles.btn_container}>
        <Button
          style={styles.btn}
          onPress={() => {
            props.navigation.navigate('Booking');
          }}>
          <Text style={{fontSize: 20, fontFamily: 'bold', color: '#f3f8fe'}}>
            Book Now
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#f3f8fe',
  },
  title: {
    fontSize: 35,
    color: '#f3f8fe',
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 50,
    marginVertical: 15,
    fontFamily: 'serif',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '200',
    marginBottom: 10,
    marginTop: 40,
    color: 'red',
  },

  body: {
    fontSize: 16,
    flexWrap: 'wrap',
    color: '#050833',
    fontFamily: 'serif',
    textAlign: 'left',
    lineHeight: 25,
  },
  btn_container: {
    marginTop: 40,
    marginBottom: 20,
  },
  btn: {
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#0074B7',
    marginBottom: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
});
export default Home;
