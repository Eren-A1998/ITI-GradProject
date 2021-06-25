import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbe3c4',
    alignSelf: 'stretch',
    borderRadius: 25,
    alignItems: 'center',
    padding: '5%',
    margin: '5%',
  },
  selectButton: {
    width: 150,
    height: 50,
    marginLeft: 240,
    marginRight: 40,
    marginTop: 20,
    backgroundColor: '#2596be',
    justifyContent: 'center',
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
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
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
