import React, { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { getLines } from './../Redux/actions/Lines';
import { connect,useSelector } from 'react-redux';
import {bindActionCreators} from 'redux'

const Booking = (props) => {

  const lines= useSelector(state=> state.LineReducer.Lines)
  lines.sort(function (a, b) { return a.Number - b.Number });
  console.log(lines)
  
  Array.prototype.min = function () {
    return Math.min.apply(null, this);
  };

  const getStationsInbetweenSameLine = (sourceId, destinationId, lineNumber) => {
    let path = lines[lineNumber - 1].Stations.slice(sourceId > destinationId ? destinationId - 1 : sourceId - 1, destinationId < sourceId ? sourceId : destinationId);
    if (sourceId > destinationId) { path.reverse() }
    return path;
  }

  const getStationsWithFlags = (fromLineNumber, flagNumber) => {

/*
0 => 1 
1 => 2 
2 => 3 
*/

/*




*/

//lines = [{},{},{}]

    let lineStations = lines[fromLineNumber - 1].Stations;


    return lineStations.filter(station => station.Flag == flagNumber);



  }
  const getShortestPath = (sourceId, destinationId, sourceLineNumber, destinationLineNumber) => {

    if (sourceLineNumber == destinationLineNumber) {
      return getStationsInbetweenSameLine(sourceId, destinationId, sourceLineNumber);
    }



    if (Math.abs(sourceLineNumber - destinationLineNumber) == 2) {
      let firstPath = [];
      let lastPath;
      let fullPath = [];
      let sub = Math.abs(sourceLineNumber - destinationLineNumber);
      console.log("Hi Sub"+sub);
      let firstFlags = getStationsWithFlags
(sub, destinationLineNumber > sourceLineNumber ? destinationLineNumber : sourceLineNumber)
      console.log(firstFlags[0])
      firstPath = getShortestPathInTwoLines(destinationId, firstFlags[0].ID, destinationLineNumber, Math.abs(sourceLineNumber - destinationLineNumber));
      firstPath.reverse()
      uniqueFirstPath = [...new Map(firstPath.map(item => [item["Name"], item])).values()];

      lastPath = getShortestPathInTwoLines(firstFlags[0].ID, sourceId, Math.abs(sourceLineNumber - destinationLineNumber), sourceLineNumber);
      lastPath.reverse();
      fullPath.push(...lastPath, ...uniqueFirstPath)

      return [...new Map(fullPath.map(item => [item["Name"], item])).values()];


    }

    else {

      return getShortestPathInTwoLines(sourceId, destinationId, sourceLineNumber, destinationLineNumber)

    }
  }

  const getShortestPathInTwoLines = (sourceId, destinationId, sourceLineNumber, destinationLineNumber) => {

    let sourceFlags = getStationsWithFlags(sourceLineNumber, destinationLineNumber).sort((a, b) => a.Name.localeCompare(b.Name));
    let destinationFlags = getStationsWithFlags(destinationLineNumber, sourceLineNumber).sort((a, b) => a.Name.localeCompare(b.Name));


    let allPath = {};
    let lengthArr = []
    for (let i = 0; i < sourceFlags.length; i++) {
      var res = getPath(sourceId, destinationId, sourceFlags[i].ID, destinationFlags[i].ID, sourceLineNumber, destinationLineNumber);
      allPath["path" + (i + 1)] = res;
      lengthArr.push(res.length);
    }
    let indexOfMinimumLength = lengthArr.indexOf(lengthArr.min());
    return allPath["path" + (indexOfMinimumLength + 1)];
  }

  const getPath = (sourceId, destinationId, sourceFlagId, destinationFlagId, sourceLineNumber, destinationLineNumber) => {
    let path = [];
    path.push(...getStationsInbetweenSameLine(sourceId, sourceFlagId, sourceLineNumber), ...getStationsInbetweenSameLine(destinationFlagId, destinationId, destinationLineNumber));

    return [...new Map(path.map(item => [item["Name"], item])).values()];
  }


  useEffect( () => {

    props.getLines();
        //let LinesCollection = await firestore().collection('Lines').get();
  //  LinesCollection.docs.forEach((line) => {
     // setlines(lines => [...lines, line._data])
   // });
     
    console.log("Ana hena ya John")
  }, [])

  return (
    <View>
      <Button title="logout" onPress={() => {
        console.log(getShortestPath(16, 5, 1, 3));
        /*
          1  2.

          2  1

          2  3

          3  2
        */
      // console.log(getStationsWithFlags(1,2));
        //console.log(props.lines)
      }}></Button>

    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getLines }, dispatch)
}
 const mapStateToProps = (state)=>{
    console.log("State"+state)
  return {
    lines:state.LineReducer.Lines
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Booking);
