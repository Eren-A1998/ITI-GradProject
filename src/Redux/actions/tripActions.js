import firestore from '@react-native-firebase/firestore';
import { getPrice} from '../../Algorithm/BookingAlgo'
export function addTrip(trip) 
{
   let res =  firestore().collection('Trips').add(trip);
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

export function getTripPrice(path, trip)
{
    let Price;
    if(trip.toLine == 3 || trip.fromLine ==3)
      Price = getPrice(path,3);
    else
      Price = getPrice(path);
    return {
        type: 'TRIP_PRICE',
        payload: Price
    }
}

