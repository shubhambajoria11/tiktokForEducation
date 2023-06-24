import React from 'react';
import Discover from '../../screens/Discover';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Activity from '../../screens/Activity';
import Bookmarks from '../../screens/Bookmarks';
import Profile from '../../screens/Profile';
import CustomHeader from '../../component/customHeader/CustomHeader';
import colors from '../../styles/colors';
import SVGIcon from '../../assets/svg/index';
import {StatusBar} from 'react-native';
import Home from '../../screens/Home';
import {
  DIGIT_0DOT4,
  DIGIT_1,
  DIGIT_18,
  DIGIT_1DOT5,
  DIGIT_50,
} from '../../constants/numbers';

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  Home: {};
  Discover: {};
  Activity: {};
  Bookmarks: {};
  Profile: {};
};

const TabBarNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor={colors.darkBlack}
        barStyle="light-content"
      />
      <Tab.Navigator
        screenOptions={{
          // eslint-disable-next-line react/no-unstable-nested-components
          header: () => <CustomHeader />,
          tabBarActiveTintColor: colors.white,
          tabBarStyle: {
            backgroundColor: colors.darkBlack,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <SVGIcon.home
                  width={DIGIT_18}
                  height={DIGIT_18}
                  strokeWidth={DIGIT_1DOT5}
                  stroke={focused ? colors.white : colors.transparent}
                  fillOpacity={focused ? DIGIT_1 : DIGIT_0DOT4}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <SVGIcon.discover
                  width={DIGIT_18}
                  height={DIGIT_18}
                  strokeWidth={DIGIT_1DOT5}
                  color={colors.white}
                  stroke={focused ? colors.white : colors.transparent}
                  fillOpacity={focused ? DIGIT_1 : DIGIT_0DOT4}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <SVGIcon.activity
                  width={DIGIT_18}
                  height={DIGIT_18}
                  strokeWidth={DIGIT_1DOT5}
                  color={colors.white}
                  stroke={focused ? colors.white : colors.transparent}
                  fillOpacity={focused ? DIGIT_1 : DIGIT_0DOT4}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <SVGIcon.bookmarks
                  width={DIGIT_50}
                  height={DIGIT_50}
                  strokeWidth={DIGIT_1DOT5}
                  color={colors.white}
                  stroke={focused ? colors.white : colors.transparent}
                  fillOpacity={focused ? DIGIT_1 : DIGIT_0DOT4}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <SVGIcon.profile
                  width={DIGIT_18}
                  height={DIGIT_18}
                  strokeWidth={DIGIT_1DOT5}
                  color={colors.white}
                  stroke={focused ? colors.white : colors.transparent}
                  fillOpacity={focused ? DIGIT_1 : DIGIT_0DOT4}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBarNavigator;
