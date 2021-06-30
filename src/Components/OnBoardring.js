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
      dotColor={"#AEB8C4"}
      activeDotColor={"#2596be"}
      >
      <SliderPage1 titl={"Register"}
       message={"Sign up"}
       nav={navigation}
      
       />
      <SliderPage1 titl={"Login"}
       message={"If you already have account sign in"}
       nav={navigation}
       />
     <SliderPage2  nav={navigation}/>
     <SliderPage3  nav={navigation}/>
      
     </Swiper>
    
    );
  };
  
  export default OnBoarding;
  