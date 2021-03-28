import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../Components/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';

export default class HealthRelatedComplaintsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      complaint_Type: 'Health Complaint',
      state: '',
      area_Address: '',
      description_Of_Complaint: '',
      complaint_Subject: '',
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  createComplaint = () => {
    var request_id = this.createUniqueId();
    var userId = this.state.userId;
    var state_address = this.state.state.toLowerCase();

    db.collection(state_address).add({
      User_id: userId,
      Complaint_Type: this.state.complaint_Type,
      Request_Id: request_id,
      Date: firebase.firestore.FieldValue.serverTimestamp(),
      State: state_address,
      Area_Address: this.state.area_Address,
      Complaint_Subject: this.state.complaint_Subject,
      Description_Of_Complaint: this.state.description_Of_Complaint,
      Complaint_Status: 'Currently Unactive',
    });
    
    db.collection('all_complaints').add({
      User_id: userId,
      Complaint_Type: this.state.complaint_Type,
      Request_Id: request_id,
      Date: firebase.firestore.FieldValue.serverTimestamp(),
      State_Name: state_address,
      Area_Address: this.state.area_Address,
      Complaint_Subject: this.state.complaint_Subject,
      Description_Of_Complaint: this.state.description_Of_Complaint,
      Complaint_Status: 'Currently Unactive',
    });
    return Alert.alert('Complaint Added Successfully', '', [
      {
        text: 'OK',
        onPress: () => this.props.navigation.navigate('CompleteComplaint'),
      },
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <MyHeader title="Rights of Citizen " />
          <TextInput
            style={[styles.formTextInput, { height: 40 }]}
            multiline
            numberOfLines={3}
            placeholder={'State'}
            onChangeText={(text) => {
              this.setState({
                state: text,
              });
            }}
            value={this.state.state}
          />

          <TextInput
            style={[styles.formTextInput, { height: 40 }]}
            multiline
            numberOfLines={3}
            placeholder={'Address'}
            onChangeText={(text) => {
              this.setState({
                area_Address: text,
              });
            }}
            value={this.state.area_Address}
          />

          <TextInput
            style={[styles.formTextInput, { height: 40 }]}
            numberOfLines={1}
            placeholder={'Subject for  Complaint '}
            onChangeText={(text) => {
              this.setState({
                complaint_Subject: text,
              });
            }}
            value={this.state.complaint_Subject}
          />

          <TextInput
            style={[styles.formTextInput, { height: 150 }]}
            numberOfLines={1}
            placeholder={'          Description Of Complaint '}
            onChangeText={(text) => {
              this.setState({
                description_Of_Complaint: text,
              });
            }}
            value={this.state.description_Of_Complaint}
          />

          <TouchableOpacity
            onPress={() => this.createComplaint()}
            style={styles.button1Text}>
            <Text style={styles.button1text}>Submit</Text>
          </TouchableOpacity>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f0f0f0',
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
