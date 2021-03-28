import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../Components/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class AwarenessScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaProvider>
            <MyHeader title="Awareness" />
            <View>
              <Text style={styles.headerText}>
                If you are a victim of a Particular Thing
              </Text>
              <Text style={styles.headerText}>
                You are Requested to Follow out these Tips
              </Text>
            </View>

            <Text style={styles.awareness}>
              i) Write down each positive thing you experience throughout the
              day.
            </Text>


            <Text style={styles.awareness}>
              ii) Try To Remain Calm And Discuss your Problems with whom You
              Love
            </Text>


            <Text style={styles.awareness}>
              iii) Try to Give yourself credit for the small things People ask you to do
            </Text>
            
            <Text style={styles.awareness}>
              iv) Be gentle with yourself
            </Text>

            
            <Text style={styles.awareness}>
              v) Attend helpful events and Shows if you used to like them
            </Text>

              
            <Text style={styles.awareness}>
              vi) After Finishing the problem try to move ahead in Life
            </Text>
              
            <Text style={styles.awareness}>
              vii) Give people multiple reasons for doing what you want them to do.
            </Text>

                 
            <Text style={styles.awareness}>
              viii)Eat An Orange
            </Text>

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
  headerText: {
    marginTop: 10,
    fontSize: 15,
    color: '#A52A2A',
    alignSelf: 'center',
  },
  awareness: {
    marginTop: 10,
    fontSize: 15,
    color: 'black',
    marginLeft: 6,
  },
});
