import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import AwarenessScreen from '../screens/AwarenessScreen';

import ProvisionScreen from '../screens/ProvisionScreen';
import AdminEducationComplaint from '../screens/AdminEducationComplaintScreen';
import VictimComplaintScreen from '../screens/VictimComplaintScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';

import AdmMcdScreen from '../screens/AdmMcdScreen';
import AdminWaterComplaintScreen from '../screens/AdminWaterComplaintScreen';
import AdminConstructionComplaintScreen from '../screens/AdminConstructionComplaintScreen';
import AdminRoadwaysComplaintScreen from '../screens/AdminRoadwaysComplaintScreen';
import AdminSanitysationComplaintScreen from '../screens/AdminSanitysationComplaintScreen';
import AdminShopComplaintsScreen from '../screens/AdminShopComplaintsScreen';
import AdminInsuranceComplaintScreen from '../screens/AdminInsuranceComplaintScreen';

import AdminCitizenRightsScreen from '../screens/AdminCitizenRightsScreen';

import AdminHealthRelatedScreen from '../screens/AdminHealthRelatedScreen';

export const AdminAppStackNavigator = createStackNavigator(
  {
    AwarenessScreen: {
      screen: AwarenessScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    ProvisionScreen: {
      screen: ProvisionScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminEducationComplaint: {
      screen: AdminEducationComplaint,
      navigationOptions: {
        headerShown: false,
      },
    },
    VictimComplaintScreen: {
      screen: VictimComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdmMcdScreen: {
      screen: AdmMcdScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminWaterComplaintScreen: {
      screen: AdminWaterComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminConstructionComplaintScreen: {
      screen: AdminConstructionComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminRoadwaysComplaintScreen: {
      screen: AdminRoadwaysComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminSanitysationComplaintScreen: {
      screen: AdminSanitysationComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminShopComplaintsScreen: {
      screen: AdminShopComplaintsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminInsuranceComplaintScreen: {
      screen: AdminInsuranceComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminCitizenRightsScreen: {
      screen: AdminCitizenRightsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminHealthRelatedScreen: {
      screen: AdminHealthRelatedScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },

  {
    initialRouteName: 'AwarenessScreen',
  }
);
