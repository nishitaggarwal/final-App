import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import AdminMyHeader from '../Components/AdminAppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem } from 'react-native-elements';

export default class AdminShopComplaintsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: 'Administrative Government',
      stateRequested: '',
      requestedComplaintsList: [],
    };
    this.requestRef = null;
  }

  getRequestedComplaintsList = (requestedState) => {
    var state = this.state.stateRequested;
    if (state.length > 0) {
      this.requestRef = db
        .collection('all_complaints')
        .where('Complaint_Type', '==', 'Shop Complaint')
        .where('State', '==', requestedState)
        .onSnapshot((snapshot) => {
          var requesteComplaintsList = snapshot.docs.map((doc) => doc.data());
          this.setState({
            requestedComplaintsList: requesteComplaintsList,
          });
        });
    }
  };


  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.User_id}
        subtitle={item.Complaint_Status}
        titleStyle={{ color: 'black', fontWeight: 'bold',fontSize: 14 }}
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('VictimComplaintScreen', {
                details: item,
              });
            }}>
            <Text style={{ color: '#ffff' }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaProvider>
            <AdminMyHeader title="Complaints" />
            <View style={styles.container2}>
              <Text style={styles.headerText}>
                Hi KIndly type out the state for which you are trying to look
                for the Compaints for{' :'}
              </Text>

              <TextInput
                style={[styles.formTextInput, { height: 40 }]}
                multiline
                numberOfLines={3}
                placeholder={'State Name'}
                onChangeText={(text) => {
                  this.setState({
                    stateRequested: text,
                  });
                }}
                value={this.state.stateRequested}
              />
              <TouchableOpacity
                onPress={() => {
                  this.getRequestedComplaintsList(this.state.stateRequested);
                }}
                style={styles.button1Text}>
                <Text style={styles.button1text}>Search</Text>
              </TouchableOpacity>

              {this.state.requestedComplaintsList.length === 0 ? (
                <View style={styles.subContainer}>
                  <Text style={{ fontSize: 20 }}>
                    List Of All Requested Complaints
                  </Text>
                </View>
              ) : (
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={this.state.requestedComplaintsList}
                  renderItem={this.renderItem}
                />
              )}
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
    flex: 1,
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
    width: '50%',
    height: 40,
    borderRadius: 10,
  },
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
});
