import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurant from "../components/week2/Restaurant";
import Cafe from "../components/week2/Bakery";
import BottomTab from "../components/week1/BottomTab";
import MenuTab from "./MenuTab";
import Bakery from "../components/week2/Bakery";
import Fastfood from "../components/week2/Fastfood";
import Bar from "../components/week2/Bar";


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Back">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="MenuTab" component={MenuTab} options={{ headerShown: false }} />
      <Stack.Screen name="Restaurant" component={Restaurant}/>
      <Stack.Screen name="Cafe" component={Cafe} />
      <Stack.Screen name="Bakery" component={Bakery} />
      <Stack.Screen name="Fastfood" component={Fastfood} />
      <Stack.Screen name="Bar" component={Bar} />

    </Stack.Navigator>
  );
}
