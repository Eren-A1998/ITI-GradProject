import firestore from '@react-native-firebase/firestore';
export async function addTrip(trip) 
{
    // console.log("trip enter")
    // console.log(trip);
   let res = await firestore().collection('Trips').add(trip);
    return {
        type: 'ADD_TRIP',
        payload: trip
    }

}

export async function getTripsUserUpcoming(userid) 
{
    let trips = []

   let res = await firestore().collection('Trips').where('userID','==' , userid)/*.where('Limitdate','>' , Date.now().toString())*/.get();
   res.docs.forEach((trip) => {
    trips.push(trip._data)
}); 
   return {
        type: 'UPCOMING_TRIP',
        payload: trips
    }

}

export async function getTripsUserPrev(userid) 
{
    // console.log("trip enter")
    // console.log(trip);
    let trips = []

   let res = await firestore().collection('Trips').where('userID','==' , userid).where('payStatus','==','paid').where('Limitdate','<' , Date.now().toString()).get();
   res.docs.forEach((trip) => {
    trips.push(trip._data)
}); 
   
   return {
        type: 'PREV_TRIP',
        payload: trips
    }

}

