import React from 'react'
import { View } from "react-native"
import Carousel, {Pagination}  from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './sliderCard'
import data from './data'

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
  
    return (
      <View style={{height:300,backgroundColor:'#eaf0ff'}}>
        <Carousel  
          layout={'default'}
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={(index) => setIndex( index ) }
        />
        <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 10,
          marginHorizontal: 0,
          marginBottom:20,
          backgroundColor: '#ff7800'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      </View>
    )
  }
  
  export default CarouselCards

