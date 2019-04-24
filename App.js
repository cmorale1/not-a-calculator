import React from 'react';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return <HomeScreen/>
  };
}