import React from 'react';
import { Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Collections() {


        return (

            <View style={{ flex: 1, padding: 10}}>
                <View style={{flexDirection: 'row'}}>
                   <View>
                        <Text style={{paddingLeft: 10, fontSize: 25, fontWeight: 'bold', marginTop: 85}}>Recommended for you</Text>
                        <Text style={{padding: 10, fontSize: 18, color: 'gray'}}>Find the best Restaurant, Cafe and Bars </Text>
                   </View>
                   
                   <FlatList 

                        horizontal={true}
                        // data={tours}
                        data={onlineTours}
                        

                        renderItem={
                            ({ item, index }) => {
                                console.log(item, index, item.uri);
                                return (
                                    <View style={{marginRight: 10}}>
                                        <Image style={{width : 200,height: 150, borderRadius: 10 }} source={{uri: item.uri}}/>
                                        <View style={{ marginTop : -30, height : 30 , width: 200, paddingHorizontal : 10, backgroundColor : 'black', opacity : 0.5, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10}}>
                                            <Text style={{ fontSize:20, color : "white"}}>{item.title}</Text>

                                        </View>
                                        
                                    </View>
                                );
                            }
                        }
                        keyExtractor={item => item.id}

                    />


                </View>


            </View>
            
        );
}