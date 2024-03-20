import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/week1/Home';



const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Ex01"
            component={Ex01}
            options={{ title: "Exercise 1" }}
          />      
          <Stack.Screen
            name="Ex02"
            component={Ex02}
            options={{ title: "Exercise 2" }}
          />

          <Stack.Screen
            name="Ex03"
            component={Ex03}
            options={{ title: "Exercise 3" }}
          /> 
          <Stack.Screen
            name="Ex04"
            component={Ex04}
            options={{ title: "Exercise 4" }}
          />

          <Stack.Screen
            name="Ex05"
            component={Ex05}
            options={{ title: "Exercise 5" }}
          />
          <Stack.Screen
            name="Ex06"
            component={Ex06}
            options={{ title: "Exercise 6" }}
          />      
          <Stack.Screen
            name="Ex07"
            component={Ex07}
            options={{ title: "Exercise 7" }}
          />

          <Stack.Screen
            name="Ex08"
            component={Ex08}
            options={{ title: "Exercise 8" }}
          />  
          <Stack.Screen
            name="Ex09"
            component={Ex09}
            options={{ title: "Exercise 9" }}
          />      
          <Stack.Screen
            name="Ex10"
            component={Ex10}
            options={{ title: "Exercise 10" }}
          />

          <Stack.Screen
            name="Ex11"
            component={Ex11}
            options={{ title: "Exercise 11" }}
          /> 
          <Stack.Screen
            name="Ex12"
            component={Ex12}
            options={{ title: "Exercise 12" }}
          />
          <Stack.Screen
            name="Travel"
            component={Travel}
            options={{ title: "Travel" }}
          />
          <Stack.Screen
            name="Resort"
            component={Resort}
            options={{ title: "Resort" }}
          />
          <Stack.Screen
            name="Health"
            component={Health}
            options={{ title: "Health" }}
          />
        </Stack.Navigator>
      );
    
}



