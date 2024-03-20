import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Collections(props) {

        return (

            <View style={props.style}>
                <View style={{flexDirection: 'column'}}>
                   <View style={{flexDirection: 'row'}}>
                        <Text style={{paddingLeft: 10, fontSize: 25, fontWeight: 'bold', marginTop: 50}}>Popular Eatries</Text>
                   </View>
                   
                   <View style={{flexDirection: 'row'}}>
                        <Text style={{padding: 10, fontSize: 18, color: 'gray'}}>Find the best Restaurant, Cafe and Bars </Text> 
                   </View>

                    <View style={{marginTop: 20 ,flexDirection:'row',paddingRight: -100}}>
                        <Image style={{width : 250,height: 150,borderRadius: 10,marginRight:15}} source={require('../../assets/week1/tai-er.webp')}/>
                            <View style={{flex: 1, marginTop : 75, height : 50 , width: 250}}>
                                <Text style={{ fontSize:20, color : "white", padding:50, fontWeight: 'bold', marginLeft:-300}}>Tai Er</Text>
                            </View>

                        <Image style={{width : 250,height: 150,borderRadius: 10,marginRight:15}} source={require('../../assets/week1/frans.jpeg')}/>
                            <View style={{flex: 1,marginTop : 115, height : 50 , width: 250}}>
                                <Text style={{ fontSize:20, color : "white", padding:10, fontWeight: 'bold', marginLeft:-260}}>Fran's</Text>
                            </View>

                        <Image style={{width : 250,height: 150,borderRadius: 10,marginRight:15}} source={require('../../assets/week1/chips.jpeg')}/>
                            <View style={{flex: 1,marginTop : 115, height : 50 , width: 250}}>
                                <Text style={{ fontSize:20, color : "white", padding:10, fontWeight: 'bold',marginLeft:-260}}>Garret Fish & Chips</Text>
                            </View>

                    </View>

                    <View style={{marginTop: 20 ,flexDirection:'row',paddingRight: -100}}>
                        <Image style={{width : 250,height: 150,borderRadius: 10,marginRight:15}} source={require('../../assets/week1/camin.jpeg')}/>
                            <View style={{flex: 1, marginTop : 115, height : 50 , width: 250}}>
                                <Text style={{ fontSize:20, color : "white", padding:10, fontWeight: 'bold', marginLeft:-260}}>Camin Cuisine & Cafe</Text>
                            </View>

                        <Image style={{width : 250,height: 150,borderRadius: 10,marginRight:15}} source={require('../../assets/week1/fatboy.jpeg')}/>
                            <View style={{ flex: 1,marginTop : 115, height : 50 , width: 250}}>
                                <Text style={{ fontSize:20, color : "white", padding:10, fontWeight: 'bold', marginLeft:-260}}>Fat Boy</Text>
                            </View>

                        <Image style={{width : 250,height: 150,borderRadius: 10,marginRight:15}} source={require('../../assets/week1/kongju.jpeg')}/>
                            <View style={{flex: 1, marginTop : 115, height : 50 , width: 250}}>
                                <Text style={{ fontSize:20, color : "white", padding:10, fontWeight: 'bold', marginLeft:-260}}>Kongju Restaurant</Text>
                            </View>

                    </View>

                    <View style={{backgroundColor: 'lightgrey', borderRadius:10, width:780 , justifyContent:'center',opacity: 0.5}}>
                        <Button title="View All" color="black" onPress={()=>{ navigation.navigate("Restaurant"); }}/>
                    </View>

                 
                </View>


            </View>
            
        );
}