import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App.js';
import {Root} from 'native-base';
//import HomeScreen from "./src2/HomeScreen/index.js";
import SplashScreen from 'react-native-splash-screen'

export default class ReduxCounter extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  
  render() {
    return (
      <Root>
      <App />
      {/* <HomeScreen /> */}
      </Root>
    );
  }
}
AppRegistry.registerComponent('Contact3', () => ReduxCounter);

