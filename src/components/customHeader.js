import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { PropTypes } from 'prop-types';

export default class CustomHeader extends Component {

  openDrawer() {
    this.props.navigation.openDrawer();
  }
  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (

      <Header style={{backgroundColor:"#2f3542"}} androidStatusBarColor='#000000'>
        <Left>
          {
            this.props.disableBackButton ?
              <Button transparent onPress={() => this.openDrawer()} >
                <Icon name='menu' />
              </Button> :
              <Button transparent onPress={() => this.goBack()} >
                <Icon name='arrow-round-back' />
              </Button>
          }
        </Left>
        <Body>

          <Title>{this.props.title}</Title>

        </Body>
        <Right />
      </Header>

    );
  };

  static propTypes = {
    disableBackButton: PropTypes.bool,
    title: PropTypes.string,
    navigation: PropTypes.object
  }


}