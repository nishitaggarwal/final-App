import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import AdminMyHeader from '../Components/AdminAppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Constants from 'expo-constants';

export default class AdminScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      state: '',
      docId: 'iiSaWTMbz1N3eNkvjq7d',
    };
  }

  goToprovisionScreen = () => {
    this.props.navigation.navigate('ProvisionScreen');
  };

  updateDetails = (state_name) => {
    db.collection('AdminCurrentlyViewing').doc(this.state.docId).update({
      state: state_name,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaProvider>
            <AdminMyHeader title="Admin" />
            <View style={styles.container2}>
              <Text style={styles.headerText}>
                Hi KIndly type out the state for which you are trying to look
                for the Compaints for{' :'}
              </Text>

              <TextInput
                style={[styles.formTextInput, { height: 40 }]}
                numberOfLines={1}
                placeholder={'State Name'}
                onChangeText={(text) => {
                  this.setState({
                    state: text,
                  });
                }}
                value={this.state.state.toLowerCase()}
              />
              <TouchableOpacity
                onPress={() => {
                  this.goToprovisionScreen(),
                    this.updateDetails(this.state.state);
                }}
                style={styles.button1Text}>
                <Text style={styles.button1text}>Submit</Text>
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
    backgroundColor: '#f0f0f0',
    height: '100%',
    
  },
  container2: {
    backgroundColor: '#f0f0f0',
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
  headerText: {
    marginTop: 1,
    fontSize: 16,
    color: '#13d8b7',
    alignSelf: 'center',
  },
  button1text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button1Text: {
    backgroundColor: '#00ffbf',
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
