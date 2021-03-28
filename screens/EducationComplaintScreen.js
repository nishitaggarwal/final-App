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
import { LinearGradient } from 'expo-linear-gradient';

export default class EducationComplaintScreen extends React.Component {
  noteBoxAlert = () => {
    Alert.alert(
      'You will be Blacklisted if you try to Forge out a Wrong Complaint'
    );
  };

  forgeEducationComplaint = () => {
    this.props.navigation.navigate('forgeEducationComplaint');
  };
  forgeSchoolSantisationComplaint = () => {
    this.props.navigation.navigate('ForgeSchoolSantisationComplaint');
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <ScrollView>
            <MyHeader title="Educational Complaints" />
            <Text style={styles.headerText}>
              Kindly Select Your Concern For Complaint
            </Text>
            
            <LinearGradient
              colors={['#159A09', '#1AC10B']}
              style={styles.button1Text}>
              <TouchableOpacity onPress={() => this.forgeEducationComplaint()}>
                <Text style={styles.button1text}>School Complaints</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#1AC10B', '#20E70D']}
              style={styles.button1Text}>
              <TouchableOpacity
                onPress={() => this.forgeSchoolSantisationComplaint()}>
                <Text style={styles.button1text}>School Sanitization</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#20E70D', '#3CF32B']}
              style={styles.button1Text}>
              <TouchableOpacity onPress={() => this.forgeEducationComplaint()}>
                <Text style={styles.button1text}>School Health Facilities</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#3CF32B', '#5FF551']}
              style={styles.button1Text}>
              <TouchableOpacity onPress={() => this.forgeEducationComplaint()}>
                <Text style={styles.button1text}>Staff Complaints</Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => this.noteBoxAlert()}
              style={styles.noteBox}>
              <Text style={styles.noteBoxtext}>
                You will be Blacklisted if you try to Forge out a Wrong
                Complaint{' '}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#26f796',
    marginTop: 0,
  },
  headerText: {
    marginTop: 10,
    fontSize: 15,
    color: '#A52A2A',
    alignSelf: 'center',
  },
  button1text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  button1Text: {
    //    backgroundColor: '#bada55',
    marginTop: 10,
    // marginBottom: 318,
    //   color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 65,
    borderRadius: 10,
  },

  noteBox: {
    backgroundColor: '#ff6600',
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
  },
});
