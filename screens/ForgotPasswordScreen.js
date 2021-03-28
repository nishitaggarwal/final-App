import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Header, Icon, Badge } from 'react-native-elements';

export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }
  forgotPassword = (Email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(Email)
      .then(function (user) {
        alert('Sucessfull');
      })
      .catch(function (e) {
        console.log(e);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaProvider>
            <Header
              leftComponent={
                <Icon
                  name="arrow-left"
                  type="feather"
                  color="#ffffff"
                  onPress={() => {
                    this.props.navigation.navigate('SplashScreen');
                  }}
                />
              }
              centerComponent={{
                text: 'Reset',
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
              backgroundColor="#B1E5FB"
            />
            <View style={styles.container2}>
              <View style={{ alignItems: 'center' }}>
                {' '}
                <Image
                  style={{
                    width: 150,
                    height: 120,
                    marginTop: 20,
                  }}
                  source={require('../assets/cartoon-boy.png')}
                />
              </View>
              <Text style={styles.text}>Forgot Password?</Text>
              <Text
                style={{
                  color: 'grey',
                  marginTop: 5,
                   fontSize: 14,
                }}>
                No worries we Will send you a verification link to reset the
                password just type up your mail Address
              </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={'Email-Address'}
                onChangeText={(text) => {
                  this.setState({
                    email: text,
                  });
                }}
                value={this.state.email}
              />

              <TouchableOpacity
                onPress={() => {
                  this.forgotPassword(this.state.email);
                }}
                style={styles.button1Text}>
                <Text style={styles.button1text}>Send Mail</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaProvider>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00E0F5',
    height: '100%',
  },
  text: {
    color: '#333',
    fontSize: 24,
    marginLeft: 25,
  },
  container2: {
    backgroundColor: '#00E0F5', //115084,#127A5E
    height: '100%',
    padding: 8,
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button1text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button1Text: {
    backgroundColor: '#ffab91',
    marginTop: 10,
    // marginBottom: 318,
    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '75%',
    height: 60,
    borderRadius: 10,
  },
});
