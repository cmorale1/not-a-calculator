import React from 'react';
import Expo from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import CalculatorScreen from './screens/CalculatorScreen';
import HiddenHomeScreen from './screens/HiddenHomeScreen';

const AppNavigator = createStackNavigator({
    Calculator: {
        screen: CalculatorScreen
    },
    HiddenHome: {
        screen: HiddenHomeScreen
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
