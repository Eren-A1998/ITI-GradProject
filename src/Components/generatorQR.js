import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import QRCode from 'react-native-qrcode-svg';

const QR = ()=>{
    return (
        <View style={styles.container}>
          <Text style={{fontSize:22 , fontWeight:'bold' , color:'#0074B7' ,  marginBottom:20}}>Scan Your Code</Text>
          <QRCode
          size={200}
            value="http://awesome.link.qr"
          />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
  },
});

export default QR;