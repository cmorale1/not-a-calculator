import React from 'react';
import { StyleSheet, Dimensions, PanResponder, View, Text } from 'react-native';

export default class HiddenHomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Pictures of Boobs</Text>
            </View>
        )
    }

}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};