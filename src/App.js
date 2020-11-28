import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';

import { store } from './utils/store';
import HomeScreen from './screens/home/index';
import Contacts from './screens/contacts/index';
import Contactf from './screens/contactf/index';
import CustomDrawer from './components/customDrawer';

import { Root } from 'native-base';

const HomeNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Contacts: {
    screen: Contacts,
  }


},
  {
    initialRouteName: 'Home',
    drawerType: 'slide',
    contentComponent: props => <CustomDrawer {...props} />
  }
);

const Navigator = createStackNavigator({
  HomeNavigator,
  Contactf: { screen: Contactf },
}, {
  initialRouteName: 'HomeNavigator',
  headerMode: 'none'
}
)

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      
        <Root>
          <Provider store={store}>
         <AppContainer />
         </Provider> 
        </Root>
    );
  }
}