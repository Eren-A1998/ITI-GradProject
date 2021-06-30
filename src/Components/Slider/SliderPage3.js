import React from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import SliderStyle from '../../Styles/SliderStyle'
import Icon from 'react-native-vector-icons/Entypo';


const SliderPage3 = (props)=> {
    return (
      <View style={SliderStyle.container}>
             <View >
             <View>
          <Text style={SliderStyle.headerText} >Booking</Text>
          </View>
          <TouchableOpacity
            style={SliderStyle.skipButton} 
            onPress={()=>{
              props.nav.replace('Register')
            }}>
            <Text style={SliderStyle.skipTxt}>Skip</Text>
          </TouchableOpacity>
      </View>
      <View style={SliderStyle.message}>
        <Icon name = "dot-single" size = {40} color="#214358"></Icon>
        <Text style={SliderStyle.messageText}>
            Book your Ticket
        </Text>
      </View>
        <View>
          
        <Image source={require('./booking.png')} 
        style={{width:160 , height:140 , top:180, alignSelf:'center'}}
        />
        <TouchableOpacity style={SliderStyle.bookBtn}
          onPress={()=>{
           props.nav.replace('Register')
            
          }}
          >
            <Text style={{alignSelf:'center',padding:6}}>Getting Start</Text>
          </TouchableOpacity>
        </View>
       </View>
    );
  };
  
  export default SliderPage3;
  