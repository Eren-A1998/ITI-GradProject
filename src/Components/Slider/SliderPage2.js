import React from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import SliderStyle from '../../Styles/SliderStyle'


const SliderPage2 = (props)=> {
    return (
     <View style={SliderStyle.container}>
             <View >
          <View style={SliderStyle.header}>
          <Text style={SliderStyle.headerText} ></Text>
          </View>
          <TouchableOpacity
            style={SliderStyle.skipButton} 
            onPress={()=>{
              //alert("navigate to Registration")
              props.nav.replace('Register')
            }}>
            <Text style={SliderStyle.skipTxt}>Skip</Text>
          </TouchableOpacity>
      </View>
      <View style={SliderStyle.message}>
        <Text style={SliderStyle.header}>
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
  