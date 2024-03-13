import React from 'react';
import { Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Home() {

        return (

            <View style={{ padding: 10, justifyContent: 'space-around'}}>
                
                <View style={{flexDirection: 'row'}}>
                    <Image style={{flex: 1 , resizeMode: 'cover', aspectRatio: 5/2, borderRadius: 20 , opacity: 1.25}} source={require('../../assets/week1/thai.jpg')}></Image>
                </View>

                <View style={{ flexDirection : "row", marginTop : -100 , borderRadius: 20, width: 500, height: 50, backgroundColor: 'white', justifyContent: 'center',alignItems: 'center', marginLeft: 250 }}>
                    <FontAwesome style={{ }} name="search" size={20} color="black" />
                    <Text style={{ fontSize : 10, color : 'gray' }}> Search..</Text>
                </View>

                <View style={{ flexDirection : "row", marginTop : -50 , borderRadius: 20, width: 150, height: 50, backgroundColor: 'white', justifyContent: 'center',alignItems: 'center', marginLeft: 50 }}>
                    <FontAwesome style={{ }} name="map-marker" size={20} color="red" />
                    <Text style={{ fontSize : 10, color : 'gray' }}> Location </Text>
                </View>

                




            </View>
            
        );
}