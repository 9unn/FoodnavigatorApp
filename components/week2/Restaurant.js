import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, Text, TextInput } from "react-native";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function Restaurant(props) {

    

    const [onlineRestaurant, setOnlineRestaurant] = useState([]);   

    const loadOnlineRestaurant = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/9unn/FoodnavigatorApp/main/food.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineRestaurant(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadOnlineRestaurant();
    }, []);
    
    

    return (
        <View style={{flex:1}}>
            <View style={props.style}>          

                <Text style={{ fontSize: 28, fontWeight: 'bold', padding: 50, alignSelf: 'center'}}>Restaurant</Text>
                
                <View style={{alignSelf: 'center', borderColor: 'grey',flexDirection : "row", borderRadius: 20, width: 500, height: 50, borderWidth: 1, justifyContent: 'center',alignItems: 'center'}}>
                    <FontAwesome style={{}} name="search" size={20} color="black" />
                    <TextInput style={{ fontSize : 10, color : 'gray' }}> Search </TextInput>
                </View>



                <FlatList 

                    horizontal={false}
                    // data={tours}
                    data={onlineRestaurant}

                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View style={{flex:1,flexDirection: 'row',marginRight: 10, alignSelf:'center', paddingTop:50}}>

                                    <Image style={{width : 200,height: 150, borderBottomLeftRadius:10,borderTopLeftRadius: 10 }} source={{uri: item.uri}}/>
                                    
                                    <View style={{ height : 150 , width: 550, paddingHorizontal : 10, backgroundColor : 'lightgrey',opacity: 0.75, borderBottomRightRadius : 10 , borderTopRightRadius : 10}}>
                                        <Text style={{ fontSize:24, color : "black", fontWeight:'bold',paddingTop:10}}>{item.title}</Text>
                                        <FontAwesome style={{flexDirection: 'row' , marginTop:10}} name="map-marker" size={20} color="black" />
                                        <Text style={{marginTop: -20,fontSize:18, color : "black", paddingLeft: 20}}>{item.place}</Text>  
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




