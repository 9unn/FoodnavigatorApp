import React from 'react';
import { Button, Image, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function Home() {

    const navigation = useNavigation(); 

        return (

            <View style={{ padding: 10, justifyContent: 'space-around'}}>
                
                <View style={{flexDirection: 'row'}}>
                    <Image style={{flex: 1 , resizeMode: 'cover', aspectRatio: 5/2, borderRadius: 20 , opacity: 1.25}} source={require('../../assets/week1/thai.jpg')}></Image>
                </View>

                <View style={{ flexDirection : "row", marginTop : -100 , borderRadius: 20, width: 500, height: 50, backgroundColor: 'white', justifyContent: 'center',alignItems: 'center', marginLeft: 250 }}>
                    <FontAwesome style={{ }} name="search" size={20} color="black" />
                    <Button title="Search.." fontSizesize="10" color="grey"  onPress={()=>{ navigation.navigate("Search"); }}/>
                </View>

                <View style={{ flexDirection : "row", marginTop : -50 , borderRadius: 20, width: 150, height: 50, backgroundColor: 'white', justifyContent: 'center',alignItems: 'center', marginLeft: 50 }}>
                    <FontAwesome style={{ }} name="map-marker" size={25} color="red"  />
                    <Button title="Find Me" fontSizesize="10" color="grey"  onPress={()=>{ navigation.navigate("Location"); }}/>
                    
        
                </View>

                




            </View>
            
        );
}