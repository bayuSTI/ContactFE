import React, { Component } from 'react';
import { Container, Header, Title,  Card, CardItem, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CustomHeader from '../../components/customHeader';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { findAllContacts } from '../../actions/contacts';


class Home extends Component {

  componentDidMount(){
    this.props.findAllContacts();
  }

  render() {
    console.log('render home');
    return (
      
      <Container>
      
        <CustomHeader navigation={this.props.navigation} title="Home" disableBackButton={true}/>
        
        <Content>
        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                 {/* <Thumbnail source={require("../../assets/img/logo.png")} />  */}
                <Body>
                  <Text>Hello adventurer!!</Text>
                  <Text note>November 10, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require("../../assets/img/contacts.jpg")} style={{height: 200, width: 350, flex: 1}}/> 
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}



function mapStateToProps(state){
  return{
   contacts : state.contacts.data,
   error: state.contacts.error
  };
  }
  function matchDispatchToProps(dispatch){
  return bindActionCreators({findAllContacts}, dispatch)
  }

  export default connect(mapStateToProps, matchDispatchToProps)(Home);