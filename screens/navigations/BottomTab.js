import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { FontAwesome } from "@expo/vector-icons";
import Home from './Home';
import Search from '../../screens/week3/Search';
import User from '../../screens/week3/User';
import Find from '../../screens/week1/Find';




const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
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
   
