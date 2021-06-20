import React from 'react';
import Swiper from 'react-native-swiper';
import SliderPage1 from './Slider/SliderPage1'
import SliderPage2 from './Slider/SliderPage2'
import SliderPage3 from './Slider/SliderPage3'

const OnBoarding = ({navigation})=> {
  return (
     <Swiper
      scrollEnabled={true} 
      autoplay={true} 
      autoplayTimeout={2}
      //showsButtons={true}
      dotColor={"#2596be"}
      activeDotColor={"#fbe3c4"}
      >
      <SliderPage1 titl={"Register"}
       message={"First you need to sign up "}
       nav={navigation}
      
       />
      <SliderPage1 titl={"Login"}
       message={"Already have account!! \n \n \n       ==== Login ===="}
       nav={navigation}
       />
     <SliderPage2  nav={navigation}/>
     <SliderPage3  nav={navigation}/>
      
     </Swiper>
    
    );
  };
  
  export default OnBoarding;
  