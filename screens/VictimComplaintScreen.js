import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import { Card, Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config.js';
import AdminMyHeader from '../Components/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem } from 'react-native-elements';

export default class VictimComplaintScreen extends React.Component {
  constructor(props) {
    super(props);
    //   console.log(this.props.navigation.getParam('details')['User_id']);
    this.state = {
      userId: 'Administrative Government',
      stateRequested: '',
      victimId: this.props.navigation.getParam('details')['User_id'],
      complaintId: this.props.navigation.getParam('details')['Request_Id'],
      victimName: '',
      victimContact: '',
      victimAddress: '',
      victimState: this.props.navigation.getParam('details')['State'],
      victimRequestDocId: this.props.navigation.getParam('details')[
        'Request_Id'
      ],
      complaintType: this.props.navigation.getParam('details')[
        'Complaint_Type'
      ],
      complaintDescription: this.props.navigation.getParam('details')[
        'Description_Of_Complaint'
      ],
    };
  }

  getVictimDetails() {
    db.collection('users')
      .where('email_id', '==', this.state.victimId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            victimName: doc.data().first_name,
            victimContact: doc.data().contact,
            victimAddress: doc.data().address,
          });
        });
      });

    db.collection('all_complaints')
      .where('request_id', '==', this.state.complaintId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            recieverRequestDocId: doc.id,
            complaintType: doc.data().Complaint_Type,
          });
        });
      });
  }

  updateComplaintStatus() {
    var message = 'Complaint Under Progress';
    db.collection('all_complaints')
      .where('Request_Id', '==', this.state.complaintId)
      .where('User_id', '==', this.state.victimId)
      .where('Complaint_Type', '==', this.state.complaintType)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          db.collection('all_complaints').doc(doc.id).update({
            Complaint_Status: message,
          });
        });
      });
  }

  updateComplaintStatusFinal = () => {
    var User_id = this.state.victimId;
    var requestId = this.state.complaintId;
    var message = 'Complaint Successfully Resolved';

    db.collection('all_complaints')
      .where('Request_Id', '==', requestId)
      .where('User_id', '==', User_id)
      .where('Complaint_Type', '==', this.state.complaintType)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          db.collection('all_complaints').doc(doc.id).update({
            Complaint_Status: message,
          });
        });
      });
  };

  componentDidMount() {
    this.getVictimDetails();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaProvider>
            <View style={{ flex: 0.1 }}>
              <Header
                leftComponent={
                  <Icon
                    name="arrow-left"
                    type="feather"
                    color="#ffffff"
                    onPress={() => {
                      this.props.navigation.goBack();
                    }}
                  />
                }
                centerComponent={{
                  text: 'Complaints',
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
            </View>

            <View style={{ flex: 0.9 }}>
              <View
                style={{
                  flex: 0.3,
                  flexDirection: 'row',
                  paddingTop: RFValue(30),
                  paddingLeft: RFValue(10),
                }}>
                <View style={{ flex: 0.4 }}>
                  <Image
                    source={require('../assets/request-list.png')}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: 'contain',
                    }}
                  />
                </View>

                <View
                  style={{
                    flex: 0.6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: RFValue(25),
                      textAlign: 'center',
                    }}>
                    Complaint Type: {this.state.complaintType}
                  </Text>

                  <Text
                    style={{
                      fontWeight: '450',
                      fontSize: RFValue(15),
                      textAlign: 'center',
                      marginTop: RFValue(15),
                    }}>
                    Request Id: {this.state.victimRequestDocId}
                  </Text>
                </View>
              </View>

              <View
              /*     style={{
                  flex: 0.7,
                  padding: RFValue(20),
                }}*/
              >
                <View
                  style={{
                    //  justifyContent: 'center',
                    //   alignItems: 'center',
                    marginTop: RFValue(50),
                    borderWidth: 1,
                    borderColor: '#00CCBB',
                    //    padding: RFValue(10),
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: RFValue(30),
                    }}>
                    Victim Information
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: RFValue(20),
                      marginTop: RFValue(30),
                    }}>
                    Name : {this.state.victimName}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: RFValue(20),
                      marginTop: RFValue(30),
                    }}>
                    Contact Number: {this.state.victimContact}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: RFValue(20),
                      marginTop: RFValue(30),
                    }}>
                    State: {this.state.victimState.toUpperCase()}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: RFValue(20),
                      marginTop: RFValue(30),
                    }}>
                    Address: {this.state.victimAddress}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: RFValue(20),
                      marginTop: RFValue(30),
                    }}>
                    Description: {this.state.complaintDescription}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {this.state.victimId !== this.state.userId ? (
                    <View>
                      <TouchableOpacity
                        style={[styles.button2,{marginTop:10}]}
                        onPress={() => {
                          this.updateComplaintStatus();

                          this.props.navigation.navigate('ProvisionScreen');
                        }}>
                        <Text>Mark as "Currently in Progress"</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.button2, { marginTop: 10 }]}
                        onPress={() => {
                          this.updateComplaintStatusFinal();

                          this.props.navigation.navigate('ProvisionScreen');
                        }}>
                        <Text>Mark as "Marks As Done"</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
          </SafeAreaProvider>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00E0CE',
    height: '100%',
    flex: 1,
  },

  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: '110%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(60),
    backgroundColor: '#1DB8D7',

    elevation: 16,
  },
});
