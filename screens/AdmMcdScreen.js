import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import AdminMyHeader from '../Components/AdminAppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Header, Icon, Badge } from 'react-native-elements';

export default class AdmMcdScreen extends React.Component {
  goToForgeMcdComplaintScreen = () => {
    this.props.navigation.navigate('AdminSanitysationComplaintScreen');
  };

  goToForgeWaterComplaintScreen = () => {
    this.props.navigation.navigate('AdminWaterComplaintScreen');
  };

  goToForgeConstructionComplaint = () => {
    this.props.navigation.navigate('AdminConstructionComplaintScreen');
  };

  goToForgeRoadwaysComplaint = () => {
    this.props.navigation.navigate('AdminRoadwaysComplaintScreen');
  };

  goToForgeShopComplaint = () => {
    this.props.navigation.navigate('AdminShopComplaintsScreen');
  };

  render() {
    return (
      <View style={styles.container}>
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
              text: 'Municipal Corporation',
              style: { color: 'Black', fontSize: 13, fontWeight: 'bold' },
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
          />{' '}
          <Text style={styles.headerText}>
            Kindly Choose Your Concern for the Complaints
          </Text>
          <LinearGradient
            colors={['#FF9933', '#FFEBD6']}
            style={styles.button1Text}>
            <TouchableOpacity
              onPress={() => this.goToForgeWaterComplaintScreen()}
              //   style={styles.button1Text}
            >
              <Text style={styles.button1text}>Water</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#FFBA70', '#FFEBD6']}
            style={styles.button2Text}>
            <TouchableOpacity
              onPress={() => this.goToForgeConstructionComplaint()}
              //  style={styles.button2Text}
            >
              <Text style={styles.button1text}>Construction</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#FFA647', '#FFEBD6', '#138808']}
            style={styles.button3Text}>
            <TouchableOpacity
              onPress={() => this.goToForgeRoadwaysComplaint()}
              // style={styles.button3Text}
            >
              <Text style={styles.button1text}>Roadways</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#5FF551', '#20E70D']}
            style={styles.button4Text}>
            <TouchableOpacity
              onPress={() => this.goToForgeMcdComplaintScreen()}
              // style={styles.button4Text}
            >
              <Text style={styles.button1text}>Sanitation of</Text>
              <Text style={styles.button1text}>Public Toilets</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#20E70D', '#138808']}
            style={styles.button5Text}>
            <TouchableOpacity
              onPress={() => this.goToForgeShopComplaint()}
              // style={styles.button5Text}
            >
              <Text style={styles.button1text}>Shop Complaints</Text>
            </TouchableOpacity>
          </LinearGradient>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
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
    backgroundColor: '#00ff00',
    marginTop: 10,
    // marginBottom: 318,
    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.3',
  },
  button2Text: {
    backgroundColor: '#ff0000',
    marginTop: 15,
    alignSelf: 'center',

    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.3',
  },
  button3Text: {
    backgroundColor: '#fe6f5e',
    marginTop: 15,
    alignSelf: 'center',

    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.3',
  },
  button4Text: {
    backgroundColor: '#30ECFB',
    marginTop: 15,
    alignSelf: 'center',

    color: '#30ECFB',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.35',
  },
  button5Text: {
    backgroundColor: '#ffbf00',
    marginTop: 15,
    marginBottom: 28,
    alignSelf: 'center',

    color: '#7ac85d',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: '0.3',
  },
});
