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
import MyHeader from '../Components/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem } from 'react-native-elements';
export default class TrackGrievence extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      ComplaintsList: [],
    };
    this.requestRef = null;
  }

  trackComplaint = () => {
    var user = this.state.userId;
    //  var complaint_Status = db.collection()
    this.requestRef = db
      .collection('all_complaints')
      .where('User_id', '==', user)
      // .where('Complaint_Status', '==', requestedState)
      .onSnapshot((snapshot) => {
        var ComplaintsList = snapshot.docs.map((doc) => doc.data());
        this.setState({
          ComplaintsList: ComplaintsList,
        });
      });
  };
  componentDidMount() {
    this.trackComplaint();
  }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.Complaint_Type}
        subtitle={item.Complaint_Status}
        titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('VictimComplaintScreenUser', {
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
            <MyHeader title="Track Complaints" />

            {this.state.ComplaintsList.length === 0 ? (
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20 }}>
                  List Of All Your Requested Complaints
                </Text>
              </View>
            ) : (
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.ComplaintsList}
                renderItem={this.renderItem}
              />
            )}
          </SafeAreaProvider>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  text: {
    width: 100,
    height: 30,
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
});
