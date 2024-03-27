import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/week1/Home';
import Restaurant from '../components/week2/Restaurant';
import Cafe from '../components/week2/Cafe';
import Dessert from '../components/week2/Bakery';
import Bakery from '../components/week2/Bakery';



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
            name="Restaurant"
            component={Restaurant}
            options={{ title: "Restaurant" }}
          />

          <Stack.Screen
            name="Cafe"
            component={Cafe}
            options={{ title: "Cafe" }}
          />
          <Stack.Screen
            name="Bakery"
            component={Bakery}
            options={{ title: "Bakery" }}
          />      
          <Stack.Screen
            name="Fastfood"
            component={Fastfood}
            options={{ title: "Fastfood" }}
          />

           
          
        </Stack.Navigator>
      );
    
}



