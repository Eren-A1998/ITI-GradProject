import React from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import SliderStyle from '../../Styles/SliderStyle'
import Icon from 'react-native-vector-icons/Entypo';


const SliderPage2 = (props)=> {
    return (
     <View style={SliderStyle.container}>
             <View >
          <View>
          <Text style={SliderStyle.headerText} >Reservation</Text>
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
          Pick your Trip
        </Text>
      </View>
        <View>
        <Image source={require('./ticket.png')} 
        style={{width:160 , height:140 , top:150, alignSelf:'center'}}
      />
        </View>
       </View>
    );
  };
  
  export default SliderPage2;
  