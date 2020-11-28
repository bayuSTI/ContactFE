import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Icon, Left, Body, Right, Switch, List } from 'native-base';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { Text } from 'react-native';


const menuItems = [
  {
    icons: 'home',
    label: 'Home',
    target: 'Home'
  },

  {
    icons: 'book',
    label: 'Contacts',
    target: 'Contacts'
  },

]

export default class CustomDrawer extends Component {

  navigate = (target) => {
    this.props.navigation.navigate(target);
  }

  renderListItem(rowData, index){
    return(
      <ListItem key = {'items-'+index} icon onPress = {()=>this.navigate(rowData.target)}>
        <Left>
          <Icon active name={rowData.icons}/>
        </Left>
        <Body style = {{borderBottomWidth:0}}>
          <Text style={{fontSize:15}}>{rowData.label}</Text>
        </Body>

      </ListItem>
    )
  }

  render() {
    return (

      <Container>
        <Content>
          <ImageBackground
            source={require("../assets/img/logo.png")}
            style={{

              height: 120,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }}

          >
          </ImageBackground>

          {menuItems.map((item, index)=>this.renderListItem(item, index))}
        </Content>
      </Container>
    );
  };



}