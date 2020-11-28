import React, { Component } from 'react';
import { RefreshControl, Alert, Image, StyleSheet } from 'react-native';
import {
  Container,
  Content, Button,
  Icon, Text, ListItem, Toast, Fab
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CustomHeader from '../../components/customHeader';
import { findAllContacts, deleteContacts } from '../../actions/contacts';


class Contacts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.findAllContacts();
    console.log('haii');
  }

  showDetail(id) {
    this.props.navigation.navigate('Contactf', { id });
    console.log("id pas did klik" + id);
  }

  addContact() {
    this.props.navigation.navigate('Contactf');
  }

  deleteContact(id, firstName) {
    Alert.alert(
      'DELETE',
      'Delete contact with title ' + firstName + '?',
      [
        // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK', onPress: () => {
            console.log('OK Pressed' + id)
            this.props.deleteContacts(id);
            this.reload();
            Toast.show({
              text: "Contact Deleted!",
              buttonText: "Okay",
              type: "danger",
              duration: 3000
            });
          }
        },
      ],
      { cancelable: false },
    );

  }

  // componentDidUpdate(prevProps, prevState){
  //   const {contacts} = this.props;
  //   console.log(prevProps.contacts);
  //   console.log(contacts);
  //   console.log('didu');
  //   if (prevProps.contacts && (prevProps.contacts == contacts)){
  //     this.reload();
  //   }
  // }

  renderListItem(rowData, index) {
    return (
      <ListItem key={'items-' + index} onPress={() => this.showDetail(rowData.id)}>
        <Image
          style={styles.image}
          source={{ uri: rowData.photo }}
          resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
        />
        <Text style={{ fontSize: 15 }}>{rowData.firstName}</Text>
        <Button danger bordered onPress={() => this.deleteContact(rowData.id, rowData.firstName)} style={{ position: 'absolute', right: 0, marginBottom: 20, marginLeft: 10 }}>
          <Text><Icon active name='remove-circle' style={{ color: "#FF0020" }} /></Text>
        </Button>
        {/* <Text style={{textAlign: 'right'}}><Icon active name='remove' /></Text> */}
      </ListItem>
    )
  }

  render() {
    const { error, loading, navigation } = this.props;
    console.log('render contacts ');
    console.log('props loading = ' + this.props.loading);

    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} title="Contact" disableBackButton={true} />
        <Content refreshControl={<RefreshControl refreshing={this.props.loading} onRefresh={() => this.reload()} />}>
          {this.props.contacts.map((item, index) => this.renderListItem(item, index))}
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => {
            this.setState({ active: !this.state.active });
            this.props.navigation.navigate('Contactf');
          }}>
          <Icon name="add" />
        </Fab>
        {
          error && Toast.show({
            text: error.message,
            buttonText: "OK",
            type: "danger",
            duration: 5000
          })
        }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts.data,
    error: state.contacts.error,
    loading: state.contacts.loading
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findAllContacts, deleteContacts }, dispatch)
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 75,
    marginRight: 5
  }
});

export default connect(mapStateToProps, matchDispatchToProps)(Contacts);