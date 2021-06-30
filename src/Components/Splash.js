import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import styles from '../Styles/SplashStyle';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserID } from '../Redux/actions/userActions'

class Splash extends Component {
    constructor(props) {
        super(props)

    }
    state = {

        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(200),
        nextPage: 'Login'
    }

    async componentDidMount() {
        await this.props.getUserID();
        Animated.sequence([
            Animated.timing(this.state.logoOpacity, {
                toValue: 1,
                duration: 1900,
                 useNativeDriver:false
            }),
            Animated.timing(this.state.titleMarginTop, {
                toValue: 10,
                duration: 1000,
                useNativeDriver:false
                 //1000 miliseconds = 1 second
            }),
        ]).start(() => {
            //end of animation

            if (this.props.curr != null) {
                this.setState({nextPage:'TabNav'})
            }else{
                this.setState({nextPage:'onBoarding'})
            }

            this.props.navigation.replace(this.state.nextPage)

        });
    }



    render() {
        return (
            <View style={styles.container}>
                <Animated.Image
                    source={require('../../assets/metro.png')}
                    style={{ ...styles.logo, opacity: this.state.logoOpacity }}
                />
                <Animated.Text
                    style={{
                        ...styles.title,
                        marginTop: this.state.titleMarginTop,
                    }}>
                    Metro-Tickets
                </Animated.Text>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUserID }, dispatch);
}
const mapStateToPropss = (state) => {
    return {
        curr:state.UserReducer.userID
    }
}
export default connect(mapStateToPropss, mapDispatchToProps)(Splash)
