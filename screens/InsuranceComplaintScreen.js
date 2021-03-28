import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../Components/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class InsuranceComplaintScreen extends React.Component {
  noteBoxAlert = () => {
    return Alert.alert(
      'You will be Blacklisted if you try to Forge out a Wrong Complaint'
    );
  };

  goToForgeInsuranceComplaintScreen = () => {
    this.props.navigation.navigate('ForgeInsuranceComplaint');
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <MyHeader title="Insurance Complaints" />
          <Text style={styles.headerText}>
            Kindly Choose Your Concern for the Complaints
          </Text>


          <TouchableOpacity
            onPress={() => this.goToForgeInsuranceComplaintScreen()}
            style={styles.button1Text}>
            <Text style={styles.button1text}>Rebate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.goToForgeInsuranceComplaintScreen()}
            style={[styles.button2Text]}>
            <Text style={[styles.button1text]}>Policies</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.noteBoxAlert()}
            style={styles.noteBox}>
            <Text style={styles.noteBoxtext}>
              You will be Blacklisted if you try to Forge out a Wrong Complaint{' '}
            </Text>
          </TouchableOpacity>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    marginTop: 10,
    fontSize: 15,
    color: '#A52A2A',
    alignSelf: 'center',
  },
  button1text: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  
  button1Text: {
    backgroundColor: '#00ff00',
    marginTop: 10,
    // marginBottom: 318,
    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    height: "40%",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.4',
  },

button2Text: {
    backgroundColor: '#30ECFB',
    marginTop: 15,
    alignSelf: 'center',

    color: '#30ECFB',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: "40%",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.4',
  },

  noteBox: {
    backgroundColor: '#FFFFE0',
    marginTop: 10,
    borderWidth: 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    borderRadius: 10,
    fontSize: 25,
  },
  noteBoxtext: {
    fontWeight: 'bold',
    fontSize: 15,
    margin:5
  },
});
