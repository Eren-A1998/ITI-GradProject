import React from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import SliderStyle from '../../Styles/SliderStyle'


const SliderPage3 = (props)=> {
    return (
      <View style={SliderStyle.container}>
             <View >
          <TouchableOpacity
            style={SliderStyle.skipButton} 
            onPress={()=>{
              //alert("navigate to Registration")
              props.nav.replace('Register')
            }}>
            <Text style={SliderStyle.skipTxt}>Register</Text>
          </TouchableOpacity>
      </View>
      <View style={SliderStyle.message}>
        <Text style={SliderStyle.header}>
          Book your Ticket
        </Text>
      </View>
        <View>
          <TouchableOpacity style={SliderStyle.bookBtn}
          onPress={()=>{
           // alert("navigate to Registration")
           props.nav.replace('Register')
            
          }}
          >
            <Text style={{alignSelf:'center',padding:6}}>Book Now</Text>
          </TouchableOpacity>
        <Image source={require('./booking.png')} 
        style={{width:160 , height:140 , top:200, alignSelf:'center'}}
      />
        </View>
       </View>
    );
  };
  
  export default SliderPage3;
  