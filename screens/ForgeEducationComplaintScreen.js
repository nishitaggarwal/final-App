import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../Components/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class ForgeEducationComplaint extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      complaint_Type: 'Educational Complaint',
      institution_Name: '',
      institution_Address: '',
      description_Of_Complaint: '',
      complaint_Subject: '',
      state:""
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  createComplaint = () => {
    var request_id = this.createUniqueId();
    var userId = this.state.userId
    var state_address = this.state.state.toLowerCase();

    db.collection(state_address).add({
      User_id:userId,
      Complaint_Type: this.state.complaint_Type,
      Request_Id: request_id,
      Date: firebase.firestore.FieldValue.serverTimestamp(),
      Institution_Name: this.state.institution_Name,
      State: this.state.state,
      Institution_Address: this.state.institution_Address,
      Complaint_Subject: this.state.complaint_Subject,
      Description_Of_Complaint: this.state.description_Of_Complaint,
      Complaint_Status: "Currently Unactive"
    });
    db.collection('all_complaints').add({
      User_id:userId,
      Complaint_Type: this.state.complaint_Type,
      Request_Id: request_id,
      Date: firebase.firestore.FieldValue.serverTimestamp(),
      Institution_Name: this.state.institution_Name,
      State: this.state.state,
      Institution_Address: this.state.institution_Address,
      Complaint_Subject: this.state.complaint_Subject,
      Description_Of_Complaint: this.state.description_Of_Complaint,
      Complaint_Status: "Currently Unactive"
    });
    return Alert.alert('User Added Successfully', '', [
      {
        text: 'OK',
        onPress: () => this.props.navigation.navigate('CompleteComplaint'),
      },
    ]);
  };
  render() {
    return (
      <View style = {{height:"100%"}}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
          <SafeAreaProvider>
            <MyHeader title="Forge  Complaint" />
            <TextInput
              style={[styles.formTextInput, { height: 38 }]}
              multiline
              numberOfLines={3}
              placeholder={'Institution Name'}
              onChangeText={(text) => {
                this.setState({
                  institution_Name: text,
                });
              }}
              value={this.state.institution_Name}
            />

            <TextInput
              style={[styles.formTextInput, { height: 38 }]}
              multiline
              numberOfLines={3}
              placeholder={'Institution Address'}
              onChangeText={(text) => {
                this.setState({
                  institution_Address: text,
                });
              }}
              value={this.state.institution_Address}
            />

            <TextInput
              style={[styles.formTextInput, { height: 38 }]}
              multiline
              numberOfLines={3}
              placeholder={'State Name'}
              onChangeText={(text) => {
                this.setState({
                  state: text,
                });
              }}
              value={this.state.state}
            />

            <TextInput
              style={[styles.formTextInput, { height: 38 }]}
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
              style={[styles.formTextInput, { height: 128 }]}
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
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
