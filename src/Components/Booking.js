import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getLines } from './../Redux/actions/Lines';
import { addTrip } from './../Redux/actions/tripActions';
import { PacmanIndicator } from 'react-native-indicators';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'

const Booking = (props) => {
  const [fromStations, setFromStations] = useState([{ Name: "Please Select From Line First" }]);
  const [toStations, setToStations] = useState([{ Name: "Please Select To Line First" }]);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [fromLine, setFromLine] = useState();
  const [toLine, setToLine] = useState();
  const lines = useSelector(state => state.LineReducer.Lines)
  const [Show, setShow] = useState(false);
  const [Show1, setShow1] = useState(false);

  const handleOpen = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  const handleOpen1 = () => {
    setShow1(true);
  }

  const handleClose1 = () => {
    setShow1(false);
  }

  useEffect(() => {
    props.getLines();
    console.log("Ana hena ya John")
  }, [])


  if (lines != undefined) {
    props.lines.sort(function (a, b) { return b.Number - a.Number });
    return (
      <View style={{ width: '75%', alignSelf: 'center' }}>
        <Picker
          onValueChange={(value) => {
            setFromLine(value.Number);
            const x = lines.filter(line => line.Name == value.Name)[0].Stations;
            x.sort(function (a, b) { return a.ID - b.ID });
            setFromStations(x);
            setFromStations((state) => {
              return state;
            });
          }}>

          {lines.map((val, index) => {
            if (index === 0)
              return <Picker.Item enabled={false} color="green" key={val.Name} label={val.Name} value={val} />
            return <Picker.Item key={val.Name} label={val.Name} color = "black" value={val} />
          })}
        </Picker>

        <Picker
          onValueChange={(value) => {
            setFrom(value.ID);
          }}>
          {fromStations.map((val, index) => {
            if (index == 0)
              return <Picker.Item enabled={false} color="green" key={val.Name} label={val.Name} value={val} />
            return <Picker.Item key={val.Name} label={val.Name} color="black" value={val} />
          })}
        </Picker>

        <Picker
          onValueChange={(value) => {
            setToLine(value.Number);
            const x = lines.filter(line => line.Name == value.Name)[0].Stations;
            x.sort(function (a, b) { return a.ID - b.ID });
            setToStations(x);
            setToStations((state) => {
              return state;
            });
          }}>

          {lines.map((val, index) => {
            if (index === 0)
              return <Picker.Item enabled={false} color="red" key={val.Name} label={val.Name} value={val} />
            return <Picker.Item key={val.Name} label={val.Name} color = "black" value={val} />
          })}
        </Picker>

        <Picker
          onValueChange={(value) => {
            setTo(value.ID);
          }}
        >
          {toStations.map((val, index) => {
            if (val.Name == "Please Select To Line First" || val.Name == "Select station")
              return <Picker.Item enabled={false} color="red" key={val.Name} label={val.Name} value={val} />
            return <Picker.Item key={val.Name} label={val.Name} color="black" value={val} />
          })}
        </Picker>

        <Button title="Reserve" onPress={() => {
          var DateNow = new Date(Date.now()).toUTCString();
          var Expdate = (new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000))).toUTCString();
          var Limitdate = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)).toUTCString();
          var date = DateNow.toString()
          let Trip =
          {
            from,
            to,
            fromLine,
            toLine,
            userID: 1,
            payStatus: "Unpaid",
            date,
            Expdate,
            Limitdate
          }
          if (to && from && fromLine && toLine) {
            if (to == from)
              handleOpen1();

            else {
              props.addTrip(Trip)
              props.navigation.navigate('ReservationDetails');
            }
          }
          else
            handleOpen();
        }}>
        </Button>
        <SCLAlert
          theme="danger"
          show={Show}
          title="Caution"
          titleStyle={{ color: 'red' }}
          cancellable={false}
          subtitle="Select your path"
          onRequestClose={handleClose}
        >
          <SCLAlertButton theme="default" onPress={handleClose}>Close</SCLAlertButton>
        </SCLAlert>

        <SCLAlert
          theme="danger"
          show={Show1}
          title="Caution"
          titleStyle={{ color: 'red' }}
          cancellable={false}
          subtitle="from station and to station mustn't be the same"
          onRequestClose={handleClose1}
        >
          <SCLAlertButton theme="default" onPress={handleClose1}>Close</SCLAlertButton>
        </SCLAlert>
      </View>
    );
  }
  else {
    return (
      <PacmanIndicator color='orange' size={130} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getLines, addTrip }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    lines: state.LineReducer.Lines,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);

/*
  1  2.

  2  1

  2  3

  3  2
*/