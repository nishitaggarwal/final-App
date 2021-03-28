import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import AdminMyHeader from '../Components/AdminAppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends React.Component {
  goToAdmineducationScreen = (item) => {
    this.props.navigation.navigate('AdminEducationComplaint');
  };

  goToAdminMcdScreen = () => {
    this.props.navigation.navigate('AdmMcdScreen');
  };

  goToAdminInsuranceScreen = () => {
    this.props.navigation.navigate('AdminInsuranceComplaintScreen');
  };

  goToAdminCitizenRightsScreen = () => {
    this.props.navigation.navigate('AdminCitizenRightsScreen');
  };

  goToAdminHealthFacilitiesScreen = () => {
    this.props.navigation.navigate('AdminHealthRelatedScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <ScrollView style={{ width: '100%' }}>
           <Header
              leftComponent={
                <Icon
                  name="arrow-left"
                  type="feather"
                  color="#ffffff"
                  onPress={() => {
                    this.props.navigation.navigate('SplashScreen');
                  }}
                />
              }
              centerComponent={{
                text: 'Provisions',
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

            <Text style={styles.headerText}>
              Kindly Choose Your Concern for the Complaints
            </Text>

            <LinearGradient
              colors={['#FF9933', '#FFEBD6']}
              style={styles.button1Text}>
              <TouchableOpacity onPress={() => this.goToAdminMcdScreen()}>
                <Text style={[styles.button1text, {}]}>
                  Municipal Corporation
                </Text>
                <Text
                  style={[
                    styles.button1text,
                    { margin: 1, alignSelf: 'center' },
                  ]}>
                  Related
                </Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={['#FFBA70', '#FFEBD6']}
              style={styles.button2Text}>
              <TouchableOpacity onPress={() => this.goToAdmineducationScreen()}>
                <Text style={styles.button1text}>Educational Complaints</Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={['#FFA647', '#FFEBD6', '#138808']}
              style={styles.button3Text}>
              <TouchableOpacity onPress={() => this.goToAdminInsuranceScreen()}>
                <Text style={styles.button1text}>Insurance Related </Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={['#5FF551', '#20E70D']}
              style={styles.button4Text}>
              <TouchableOpacity
                onPress={() => this.goToAdminCitizenRightsScreen()}>
                <Text style={styles.button1text}> Rights of Citizens</Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={['#20E70D', '#138808']}
              style={styles.button5Text}>
              <TouchableOpacity
                onPress={() => this.goToAdminHealthFacilitiesScreen()}>
                <Text style={styles.button1text}> Health Facilities</Text>
              </TouchableOpacity>
            </LinearGradient>
          </ScrollView>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    marginTop: 0,
    height: '100%',
    width: '100%',
  },
  headerText: {
    marginTop: 10,
    fontSize: 15,
    color: '#000',
    alignSelf: 'center',
    //  margin: 5,
  },
  button1text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000080',
    //    margin: 10,
  },

  button1Text: {
    marginTop: 10,
    // marginBottom: 318,

    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    margin: 10,
  },
  button2Text: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    alignSelf: 'center',

    color: '#7ac85d',

    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
  },
  button3Text: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    alignSelf: 'center',

    color: '#7ac85d',

    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
  },
  button4Text: {
    backgroundColor: '#30ECFB',
    marginTop: 15,
    alignSelf: 'center',

    color: '#30ECFB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
  },
  button5Text: {
    backgroundColor: '#fe6f5e',
    marginTop: 15,
    marginBottom: 28,
    alignSelf: 'center',

    color: '#7ac85d',

    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
  },
});
