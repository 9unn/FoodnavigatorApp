
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Icon from './Icon';
import { FontAwesome6 } from '@expo/vector-icons';



export default function Menu() {

    const navigation = useNavigation(); 
    
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop:75}}>

                <View style={{alignItems: 'center'}}>
                    <FontAwesome  name="spoon" size={30} color="black" onPress={()=>{ navigation.navigate("Restaurant"); }} />   
                    <Text style={{paddingTop: 5}}>Restaurant</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <FontAwesome  name="coffee" size={30} color="black" onPress={()=>{ navigation.navigate("Cafe"); }} />   
                    <Text style={{paddingTop: 5}}>Cafe</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Ionicons name="fast-food" size={28} color="black" onPress={()=>{ navigation.navigate("Fastfood"); }}/>
                    <Text style={{paddingTop: 5}}>Fast Food</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <FontAwesome6 name="bread-slice" size={28} color="black" onPress={()=>{ navigation.navigate("Bakery"); }}/>
                    <Text style={{paddingTop: 5}}>Bakery</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <FontAwesome style={{ }} name="glass" size={28} color="black" onPress={()=>{ navigation.navigate("Bar"); }}/>
                    <Text style={{paddingTop: 5}}>Bar</Text>
                </View>

                
            </View>
            
            
        );
}
