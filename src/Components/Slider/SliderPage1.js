import React ,{useRef,useEffect}from 'react';
import {Animated} from 'react-native'
import {Text,View,TouchableOpacity,Image} from 'react-native';
import SliderStyle from '../../Styles/SliderStyle'
import Icon from 'react-native-vector-icons/Entypo';

const SliderPage1 = (props)=> {
  useEffect(()=>{
   fadeIn()
   startShake()
 

  });
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const shakeAnimation=useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
 }

  
    return (
    <View style={SliderStyle.container}>
      <View >
          <View>
          <Text style={SliderStyle.headerText} >{props.titl}</Text>
          </View>
          <TouchableOpacity
            style={SliderStyle.skipButton} 
            onPress={()=>{
              props.nav.replace('Register')
              
            }

          }
          >
            <Text style={SliderStyle.skipTxt}>Skip</Text>
          </TouchableOpacity>
      </View>   
      <View style={SliderStyle.message}>
      <Icon name = "dot-single" size = {40} color="#214358"></Icon>
        <Text style={SliderStyle.messageText}>
          {props.message}
        </Text>
      </View>
      <View>
        {props.titl==="Register"?
      <Animated.View style={{transform: [{translateX:shakeAnimation}] }} >
      <Image source={require('./regist.png')} 
        style={{width:140 , height:140 , top:170, alignSelf:'center'}}
      />
      </Animated.View>
      :
      <Animated.View style={{ opacity: fadeAnim }} >
      <Image source={require('./login.png')} 
        style={{width:140 , height:140 , top:150, alignSelf:'center'}}
      />
      </Animated.View>
      }
      </View>
    </View>
    );
  };
  
  export default SliderPage1;
  