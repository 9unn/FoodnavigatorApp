
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Menu() {

        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop:75}}>

                <View style={{alignItems: 'center'}}>
                    <FontAwesome style={{ }} name="spoon" size={20} color="black" />
                    <Text style={{paddingTop: 5}}>Restaurant</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <FontAwesome style={{ }} name="coffee" size={20} color="black" />
                    <Text style={{paddingTop: 5}}>Cafe</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Ionicons name="fast-food" size={20} color="black" />
                    <Text style={{paddingTop: 5}}>Fast Food</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <MaterialCommunityIcons name="cupcake" size={20} color="black" />
                    <Text style={{paddingTop: 5}}>Dessert</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <FontAwesome style={{ }} name="glass" size={20} color="black" />
                    <Text style={{paddingTop: 5}}>Bar</Text>
                </View>

                
            </View>
            
            
        );
}