import firestore from '@react-native-firebase/firestore';
export async function getLines() 
{
    let lines = []
    let LinesCollection = await firestore().collection('Lines').get();
    LinesCollection.docs.forEach((line) => {
        lines.push(line._data)
    });
    return {
        type: 'GET_LINES',
        payload: lines
    }

}