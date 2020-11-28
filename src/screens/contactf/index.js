import React, { Component } from 'react';
import { RefreshControl, Alert, View, Image } from 'react-native';
import { Container, Content, Button, Text, Form, Input, Item, Label, Toast, } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CustomHeader from '../../components/customHeader';
import { findAllContacts, findContacts, updateContacts, addContacts } from '../../actions/contacts';
import { StyleSheet } from 'react-native';


class Contactf extends Component {

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      id: navigation.getParam('id') || '',
      firstName: null,
      lastName: null,
      age: 0,
      photo: null
    }
    console.log('idnya ' + this.state.id);
  }

  componentDidMount() {
    this.props.findContacts(this.state.id)
    console.log('is it allway here?');
    this.reload();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('but ists here');
    const { contactf } = this.props;
    if (prevProps.contactf !== contactf) {
      console.log('itsnot even there');
      this.setState(contactf);
    }
  }

  reload() {
    this.props.findContacts(this.state.id);
  }

  update() {
    Alert.alert(
      'UPDATE',
      'Update contact data?',
      [
        // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK', onPress: () => {
            console.log("axxx");
            console.log(this.state);
            console.log("yyyy");
            const newLocal = {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              age: this.state.age,
              photo: this.state.photo
            };
            this.props.updateContacts(newLocal, this.state.id);
            this.props.findAllContacts();
            //this.reload();
            this.props.navigation.goBack();
            Toast.show({
              text: "Contact Updated!",
              buttonText: "Okay",
              type: "success",
              duration: 3000
            });
          }
        },
      ],
      { cancelable: false },
    );
  }

  add() {
    Alert.alert(
      'ADD',
      'Add contact data?',
      [
        // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK', onPress: () => {
            console.log("axxx");
            console.log(this.state);
            console.log("yyyy");
            const newLocal = {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              age: this.state.age,
              photo: this.state.photo
            };
            this.props.addContacts(newLocal);
            this.props.findAllContacts();
            //this.reload();
            this.props.navigation.goBack();
            Toast.show({
              text: "Contact Added!",
              buttonText: "Okay",
              type: "success",
              duration: 3000
            });
          }
        },
      ],
      { cancelable: false },
    );

  }

  //componentWillUnmount(){}
  componentWillUnmount() {
    const newLocal = null;
    Toast.toastInstance = newLocal;
  }

  render() {
    console.log('render contactf = ');
    console.log(this.props.contactf);
    const { contactf, navigation } = this.props;
    //var data = contactf||{};
    //var nav = navigation||{};
    //console.log('idnya = '+contactf.id);

    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} title="Contact Detail" />
        <Content refreshControl={<RefreshControl refreshing={this.props.loading} onRefresh={() => this.reload()} />}>
          {/* <Text>this is contacts {navigation.getParam('id')} </Text> */}

          {/* {this.props.contactf.map((item, index) => this.renderListItem(item, index))} */}

          <Form>
            {/* {!navigation.getParam('id')?
            <Item stackedLabel>
              <Label>ID</Label>
              { <Input value={data.id}/> }
              <Input onChangeText={(id) => this.setState({id})} value={''+this.state.id } placeholder='id'/>
            </Item>
          :null} */}
            <Item stackedLabel>
              <Label>First Name</Label>
              {/* <Input value={data.judul}/> */}
              <Input onChangeText={(firstName) => this.setState({ firstName })} value={this.state.firstName} placeholder='first name' />
            </Item>

            <Item stackedLabel>
              <Label>Last Name</Label>
              {/* <Input value={data.penerbit}/> */}
              <Input onChangeText={(lastName) => this.setState({ lastName })} value={this.state.lastName} placeholder='last name' />
            </Item>

            <Item stackedLabel>
              <Label>Age</Label>
              {/* <Input value={''+data.stok}/> */}
              <Input onChangeText={(age) => this.setState({ age })} value={'' + this.state.age} placeholder='age' />
            </Item>

            <Item stackedLabel>
              <Label>Photo</Label>
              {/* <Input value={''+data.harga}/> */}
              <Input onChangeText={(photo) => this.setState({ photo })} value={'' + this.state.photo} placeholder='photo' />
            </Item>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
              <Image
                style={styles.image}
                source={{ uri: this.state.photo || 'https://icon-library.com/images/default-profile-icon/default-profile-icon-17.jpg' }}
                resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
              />

              {/* <Image
                style={{ width: 100, height: 100 }}
                resizeMode={'cover'}
                source={{ uri: this.state.photo }} /> */}
            </View>

            {navigation.getParam('id') ?
              <Button style={styles.buttonView} block success onPress={() => this.update()}>
                <Text>Update</Text>
              </Button> :
              <Button style={styles.buttonView} block success onPress={() => this.add()}>
                <Text>ADD</Text>
              </Button>
            }
          </Form>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactf: state.contactf.data,
    error: state.contactf.error,
    loading: state.contactf.loading
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findContacts, updateContacts, addContacts, findAllContacts }, dispatch)
}

const styles = StyleSheet.create({
  buttonView: {
    marginVertical: 20
  },
  image: {
    width: 150,
    height: 150,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 75
  }
});

export default connect(mapStateToProps, matchDispatchToProps)(Contactf);