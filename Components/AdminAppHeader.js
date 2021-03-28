import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert, Image } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class AdminMyHeader extends Component {
  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="arrow-left"
            type="feather"
            color="#ffffff"
            onPress={() => this.props.navigation.goBack()
            //this.props.navigation.dispatch(NavigationActions.back())
            }
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: 'Black', fontSize: 16, fontWeight: 'bold' },
        }}
        rightComponent={
          <Image
            style={{
              width: 38,
              height: 36,
            }}
            source={require('../assets/India_Log.png')}
          />
        }
        backgroundColor="#eaf8fe"
      />
    );
  }
}
