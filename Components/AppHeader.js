import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert,Image } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class MyHeader extends Component {
  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="#696969"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: 'Black', fontSize: 20, fontWeight: 'bold' },
        }}
        rightComponent={
          <Image
            style={{ 
              width:38,
              height:36,
            }}
       
            source={require('../assets/India_Log.png')}
          />
        }
        backgroundColor="#B1E5FB"
      />
    );
  }
}
