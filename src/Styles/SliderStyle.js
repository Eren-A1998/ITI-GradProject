import {StyleSheet} from 'react-native'
const SliderStyle =StyleSheet.create({
    container:{
        flex:1,
        padding: 24,
        backgroundColor: "#eaeaea",
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
        padding:5
        
    },
    headerText:{
        fontSize:18,
        top:10,
        fontWeight:"bold",
    },
    message:{
        flexDirection:'row',
        top:80,
        width:200,
        alignSelf:"center",
    },
    messageText:{
        fontSize:18,
        top:8,
        fontFamily:"serif",
        fontWeight:'bold',
        color:"#214358",   
    },
    bookBtn:{
        alignSelf:'center',
        top:280,
        width:150,
        height:40,
        borderRadius:15,
        backgroundColor:'#4acfd9',
        borderWidth:2
    }
});

export default SliderStyle;