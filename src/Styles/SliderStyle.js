import {StyleSheet} from 'react-native'
const SliderStyle =StyleSheet.create({
    container:{
        flex:1,
        padding: 24,
        backgroundColor: "#eaeaea",
      //  backgroundColor:"#fbe3c4",
        position:"relative"
    },
   
    skipButton:{
        width:100,
        position:"absolute",
        top:14,
        right:5,
        borderRadius:15,
        backgroundColor:'#fbe3c4',
        borderWidth:1
    },
    skipTxt:{
        alignSelf:'center',
        color:'black',
        
    },
    header:{
        alignSelf:'center',
        fontWeight:"bold",
        fontSize:20

    },
    headerText:{
        fontSize:20,
        top:10,
        fontWeight:"bold"
    },
    message:{
        top:80,
        width:200,
        alignSelf:"center",
    },
    messageTxt:{
    },
    bookBtn:{
        alignSelf:'center',
        top:140,
         width:150,
         height:40,
        borderRadius:15,
        backgroundColor:'#4acfd9',
        borderWidth:2
    }
});

export default SliderStyle;