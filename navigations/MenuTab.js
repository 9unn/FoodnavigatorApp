import React from 'react';
import { View, Text, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function MenuTab() {

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "tomato", tabBarInactiveTintColor: "gray", }} >
        <Tab.Screen
            name="Find"
            component={Find}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (  <FontAwesome name="search" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="User"
            component={User}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="user" color={color} size={size} /> ),
            }}
          />
        </Tab.Navigator>

            
    );
}