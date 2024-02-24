import {Image, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Colorsors, Icons} from '../../Theme';

import Home_Screen from '../../Pages/Home';
import Order_Screen from '../../Pages/Orders_Screen';

import Settings_Screen from '../../Pages/Setiings';
const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {marginBottom: '4%'},

        tabBarStyle: {backgroundColor: Colors.white},
      }}>
      <Tab.Screen
        name="Home_Screen"
        component={Home_Screen}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size}) => (
            <View style={{}}>
              <View
                style={{
                  backgroundColor: focused ? Colors.primary : Colors.white,
                  borderRadius: 100,

                  paddingHorizontal: 10,
                  paddingVertical: 7,
                }}>
                <Icons
                  type="AntDesign"
                  name="home"
                  color={focused ? Colors.white : Colors.lightGray}
                  size={26}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Order_Screen"
        component={Order_Screen}
        options={{
          tabBarLabel: 'Order_Screen',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size}) => (
            <View style={{}}>
              <View
                style={{
                  backgroundColor: focused ? Colors.primary : Colors.white,

                  borderRadius: 100,
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                }}>
                <Icons
                  type="MaterialIcons"
                  name="account-balance-wallet"
                  color={focused ? Colors.white : Colors.lightGray}
                  size={26}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings_Screen"
        component={Settings_Screen}
        options={{
          tabBarLabel: 'Settings',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size}) => (
            <View style={{}}>
              <View
                style={{
                  backgroundColor: focused ? Colors.primary : Colors.white,

                  borderRadius: 100,
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                }}>
                <Icons
                  type="Feather"
                  name="settings"
                  color={focused ? Colors.white : Colors.lightGray}
                  size={26}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
