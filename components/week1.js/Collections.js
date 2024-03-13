import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Collections(props) {

    const [onlineReccommend, setOnlineReccommend] = useState([]);   

    const loadOnlineReccommend = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/9unn/FoodnavigatorApp/main/eiei.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
          setOnlineReccommend(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadOnlineReccommend();
    }, []);
    

        return (

            <View style={props.style}>
                <View style={{flexDirection: 'column'}}>
                   <View style={{flexDirection: 'row'}}>
                        <Text style={{paddingLeft: 10, fontSize: 25, fontWeight: 'bold', marginTop: 85}}>Recommended for you</Text>
                   </View>
                   
                   <View style={{flexDirection: 'row'}}>
                        <Text style={{padding: 10, fontSize: 18, color: 'gray'}}>Find the best Restaurant, Cafe and Bars </Text>
                   </View>
                   
                   <FlatList 

                        horizontal={true}
                    
                        data={onlineReccommend}

                        renderItem={
                            ({ item, index }) => {
                                console.log(item, index, item.uri);
                                return (
                                
                                    <View style={{marginTop: 20}}>
                                        <Image style={{width : 300,height: 250, borderRadius: 1,marginRight: 20}} source={{uri: item.uri}}/>

                                        <View style={{ marginTop : -50, height : 30 , width: 300, backgroundColor : 'black', opacity : 0.5, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10}}>
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