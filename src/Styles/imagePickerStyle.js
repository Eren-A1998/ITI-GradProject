import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderRadius: 25,
    alignItems: 'center',
    padding: '1%',
    margin: '0%',
  },
  selectButton: {
    width: 120,
    height: 50,
    marginHorizontal:25,
    marginTop: 20,
    backgroundColor: '#0074B7',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 25,
  },
  uploadButton: {
    borderRadius: 25,
    width: 150,
    height: 50,
    backgroundColor: '#2596be',
    justifyContent: 'center',
    marginTop: -49,
    marginRight: 200,
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#E3E1E1',
    borderRadius: 100,
  },
  progressBarContainer: {
    marginTop: 20,
  },
  imageBox: {
    width: 200,
    height: 200,

    marginHorizontal: '50%',

    borderRadius: 100,
  },
});
