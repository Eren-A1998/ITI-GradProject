import {StyleSheet} from 'react-native';

const registerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#E3E8E9',
    alignSelf: 'stretch',
    margin: 20,
    borderRadius: 25,
    marginTop: '3%',
  },
  iconStyle: {
    color: '#2596be',
    paddingHorizontal: 10,
    fontSize: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    alignSelf:'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:0
  },
  submitBtn: {
    backgroundColor: '#2596be',
    width: 150,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
    alignSelf:'center'
  },
  Pay:
  {
    backgroundColor: '#0074B7',
    alignSelf: 'center',
    width:'50%',
    height:50,
    borderRadius:50,
  },
  textBtn: {
    color: '#fff',
    fontSize: 15,
    textAlign:'center',
    fontWeight: 'bold',
  },
});
export default registerStyle;
