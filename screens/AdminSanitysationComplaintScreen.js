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
import { Dropdown } from 'react-native-material-dropdown';
import { Header, Icon, Badge } from 'react-native-elements';

export default class AdminSanitysationComplaintScreen extends React.Component {
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
        .where('Complaint_Type', '==', 'Santisation Complaint')
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
        titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}
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
 <Header
              leftComponent={
                <Icon
                  name="arrow-left"
                  type="feather"
                  color="#ffffff"
                  onPress={() => {
                    this.props.navigation.navigate('ProvisionScreen');
                  }}
                />
              }
              centerComponent={{
                text: 'Complaints',
                style: { color: 'Black', fontSize: 18, fontWeight: 'bold' },
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
              <Text style={styles.headerText}>
                Hi KIndly type out the state for which you are trying to look
                for the Compaints for{' :'}
              </Text>

              <Dropdown
                placeholder="Select your state"
                data={[
                  {
                    value: 'Andhra Pradesh',
                    label: 'Andhra Pradesh',
                  },
                  {
                    value: 'Arunachal Pradesh',
                    label: 'Arunachal Pradesh',
                  },
                  {
                    value: 'Assam',
                    label: 'Assam',
                  },
                  {
                    value: 'Bihar',
                    label: 'Bihar',
                  },
                  {
                    value: 'Delhi',
                    label: 'Delhi',
                  },

                  {
                    value: 'Karnataka',
                    label: 'Karnataka',
                  },
                  {
                    value: 'Kerala',
                    label: 'Kerala',
                  },
                  {
                    value: 'Chhattisgarh',
                    label: 'Chhattisgarh',
                  },
                  {
                    value: 'Uttar Pradesh',
                    label: 'Uttar Pradesh',
                  },
                  {
                    value: 'Goa',
                    label: 'Goa',
                  },
                  {
                    value: 'Gujarat',
                    label: 'Gujarat',
                  },
                  {
                    value: 'Haryana',
                    label: 'Haryana',
                  },
                  {
                    value: 'Himachal Pradesh',
                    label: 'Himachal Pradesh',
                  },
                  {
                    value: 'Jammu and Kashmir',
                    label: 'Jammu and Kashmir',
                  },
                  {
                    value: 'Jharkhand',
                    label: 'Jharkhand',
                  },
                  {
                    value: 'West Bengal',
                    label: 'West Bengal',
                  },
                  {
                    value: 'Madhya Pradesh',
                    label: 'Madhya Pradesh',
                  },
                  {
                    value: 'Maharashtra',
                    label: 'Maharashtra',
                  },
                  {
                    value: 'Manipur',
                    label: 'Manipur',
                  },
                  {
                    value: 'Meghalaya',
                    label: 'Meghalaya',
                  },
                  {
                    value: 'Mizoram',
                    label: 'Mizoram',
                  },
                  {
                    value: 'Nagaland',
                    label: 'Nagaland',
                  },
                  {
                    value: 'Assam',
                    label: 'Assam',
                  },
                  {
                    value: 'Orissa',
                    label: 'Orissa',
                  },
                  {
                    value: 'Punjab',
                    label: 'Punjab',
                  },
                  {
                    value: 'Rajasthan',
                    label: 'Rajasthan',
                  },
                  {
                    value: 'Sikkim',
                    label: 'Sikkim',
                  },
                  {
                    value: 'Tamil Nadu',
                    label: 'Tamil Nadu',
                  },
                  {
                    value: 'Telangana',
                    label: 'Telangana',
                  },
                  {
                    value: 'Tripura',
                    label: 'Tripura',
                  },
                  {
                    value: 'Uttarakhand',
                    label: 'Uttarakhand',
                  },
                ]}
                style={styles.formTextInput}
                onChangeText={(text) => {
                  this.setState({
                    stateRequested: text,
                  });
                }}
                value={this.state.stateRequested}
              />

              <TouchableOpacity
                onPress={() => {
                  this.getRequestedComplaintsList(
                    this.state.stateRequested.toLowerCase()
                  );
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
