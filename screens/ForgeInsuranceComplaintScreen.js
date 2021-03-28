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

export default class ForgeInsuranceComplaintScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      complaint_Type: 'Insurance Complaint',
      company_Name: '',
      company_Address: '',
      description_Of_Complaint: '',
      complaint_Subject: '',
      state: '',
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
      Company_Name: this.state.company_Name,
      Company_Address: this.state.company_Address,
      Complaint_Subject: this.state.complaint_Subject,
      Description_Of_Complaint: this.state.description_Of_Complaint,
      Complaint_Status: 'Currently Unactive',
    });

    db.collection('all_complaints').add({
      User_id: userId,
      Complaint_Type: this.state.complaint_Type,
      Request_Id: request_id,
      Date: firebase.firestore.FieldValue.serverTimestamp(),
      State: state_address,
      Company_Name: this.state.company_Name,
      Company_Address: this.state.company_Address,
      Complaint_Subject: this.state.complaint_Subject,
      Description_Of_Complaint: this.state.description_Of_Complaint,
      Complaint_Status: 'Currently Unactive',
    });
    return Alert.alert('User Added Successfully', '', [
      {
        text: 'OK',
        onPress: () => this.props.navigation.navigate('ForgeComplaint'),
      },
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <MyHeader title="Forge Complaint" />

          <Text style={styles.headerText}>
            All Complaints are Lisited and Submitted under IRDAI
          </Text>

          <TextInput
            style={[styles.formTextInput, { height: 40 }]}
            multiline
            numberOfLines={3}
            placeholder={'Company Name'}
            onChangeText={(text) => {
              this.setState({
                company_Name: text,
              });
            }}
            value={this.state.company_Name}
          />

          <TextInput
            style={[styles.formTextInput, { height: 40 }]}
            multiline
            numberOfLines={3}
            placeholder={'state Name'}
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
            placeholder={'Company Address'}
            onChangeText={(text) => {
              this.setState({
                company_Address: text,
              });
            }}
            value={this.state.company_Address}
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
  headerText: {
    marginTop: 1,
    fontSize: 13,
    color: '#A52A2A',
    alignSelf: 'center',
  },
});
