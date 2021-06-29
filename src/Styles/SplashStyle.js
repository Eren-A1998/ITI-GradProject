import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#eaeaea',
        alignItems: 'center',
    },
    logo: {
        width: 130,
        height: 130,
    },
    title: {
        fontSize: 20,
        backgroundColor: '#eaeaea',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 10,
        color: '#000',
        fontWeight: 'bold',
    },
});
export default styles;