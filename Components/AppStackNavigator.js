import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import EducationComplaintScreen from '../screens/EducationComplaintScreen';
import McdComplaintScreen from '../screens/McdComplaintScreen';

import ForgeEducationComplaint from '../screens/ForgeEducationComplaintScreen';
import ForgeMcdComplaintScreen from '../screens/ForgeMcdComplaintScreen';

import ForgeInsuranceComplaintScreen from '../screens/ForgeInsuranceComplaintScreen';

import CitizenRightsComplaintScreen from '../screens/CitizenRightsComplaintScreen';

import AwarenessScreen from '../screens/AwarenessScreen';

import InsuranceComplaintScreen from '../screens/InsuranceComplaintScreen';

import ForgeWaterComplaint from '../screens/ForgeWaterComplaintScreen';

import ForgeConstructionComplaint from '../screens/ForgeConstructionComplaintScreen';

import ForgeRoadwaysComplaint from '../screens/ForgeRoadwaysComplaintScreen';

import ForgeShopComplaint from '../screens/ForgeShopComplaintScreen';

import ForgeSchoolSantisationComplaint from '../screens/ForgeSchoolSantisationComplaintScreen';

import HealthRelatedComplaintsScreen from '../screens/ForgeHealthComplaintScreen';

import VictimComplaintScreenUser from '../screens/VictimComplaintScreenUser';

import AdminScreen from '../screens/AdminScreen';
export const AppStackNavigator = createStackNavigator(
  {
    AwarenessScreen: {
      screen: AwarenessScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AdminScreen: {
      screen: AdminScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    VictimComplaintScreenUser: {
      screen: VictimComplaintScreenUser,
      navigationOptions: {
        headerShown: false,
      },
    },
    EducationComplaint: {
      screen: EducationComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    McdComplaint: {
      screen: McdComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    CitizenRights: {
      screen: CitizenRightsComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    InsuranceComplaint: {
      screen: InsuranceComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    HealthFacilities: {
      screen: HealthRelatedComplaintsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    forgeEducationComplaint: {
      screen: ForgeEducationComplaint,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgeMcdComplaint: {
      screen: ForgeMcdComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgeInsuranceComplaint: {
      screen: ForgeInsuranceComplaintScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    ForgeWaterComplaint: {
      screen: ForgeWaterComplaint,
      navigationOptions: {
        headerShown: false,
      },
    },

    ForgeConstructionComplaint: {
      screen: ForgeConstructionComplaint,
      navigationOptions: {
        headerShown: false,
      },
    },

    ForgeRoadwaysComplaint: {
      screen: ForgeRoadwaysComplaint,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgeShopComplaint: {
      screen: ForgeShopComplaint,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgeSchoolSantisationComplaint: {
      screen: ForgeSchoolSantisationComplaint,
      navigationOptions: {
        headerShown: false,
      },
    },
    FHealthRelatedComplaintsScreen: {
      screen: HealthRelatedComplaintsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },

  {
    initialRouteName: 'AwarenessScreen',
  }
);
