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

  const handleOpen = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  useEffect(() => {
    props.getLines();
    console.log("Ana hena ya John")
  }, [])


  if (lines != undefined) {
    props.lines.sort(function (a, b) { return a.Number - b.Number });
    return (
      <View style={{ width: '75%', alignSelf: 'center' }}>
        <Picker
          onValueChange={(value) => {
            setFromLine(value.Number);
            const x = lines.filter(line => line.Name == value.Name)[0].Stations;
            setFromStations(x);
            setFromStations((state) => {
              return state;
            });
          }}>

          {lines.map((val, index) => {
            if (index == 0)
              return <Picker.Item enabled={false} color="orange" key={val.Name} label={val.Name} value={val} />
            return <Picker.Item key={val.Name} label={val.Name} value={val} />
          })}
        </Picker>

        <Picker
          onValueChange={(value) => {
            setFrom(value.ID);
          }}>
          {fromStations.map((val) => {
            if (val.Name == "Please Select Line First")
              return <Picker.Item enabled={false} color="orange" key={val.Name} label={val.Name} value={val} />
            return <Picker.Item key={val.Name} label={val.Name} color="black" value={val} />
          })}
        </Picker>

        <Picker
          onValueChange={(value) => {
            setToLine(value.Number);
            const x = lines.filter(line => line.Name == value.Name)[0].Stations;
            setToStations(x);
            setToStations((state) => {
              return state;
            });
          }}>

          {lines.map((val, index) => {
            if (index == 0)
              return <Picker.Item enabled={false} color="orange" key={val.Name} label={val.Name} value={val} />
            return <Picker.Item key={val.Name} label={val.Name} value={val} />
          })}
        </Picker>

        <Picker
          onValueChange={(value) => {
            setTo(value.ID);
          }}
        >
          {toStations.map((val) => {
            if (val.Name == "Please Select Line First")
              return <Picker.Item enabled={false} color="orange" key={val.Name} label={val.Name} value={val} />
            return <Picker.Item key={val.Name} label={val.Name} color="black" value={val} />
          })}
        </Picker>

        <Button title="Reserve" onPress={() => {
          var DateNow = Date(Date.now());
          var Expdate = new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000));
          var Limitdate = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000));
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
          if (to && from && fromLine && toLine) 
          {
            props.addTrip(Trip)
            props.navigation.navigate('ReservationDetails');
          }
          else {
            handleOpen();
            
          }
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



// console.log(getStationsWithFlags(1,2));
// console.log(props.lines)}
// console.log(getShortestPath(16, 5, 1, 3));
/*
  1  2.

  2  1

  2  3

  3  2
*/