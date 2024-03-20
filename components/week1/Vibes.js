import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Collections(props) {

    const [onlineReccommend, setOnlineReccommend] = useState([]);   

    const loadOnlineReccommend = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/9unn/FoodnavigatorApp/main/vv.json');
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
                        <Text style={{paddingLeft: 10, fontSize: 25, fontWeight: 'bold', marginTop: 50}}>#Vibes</Text>
                   </View>
                   
                   <View style={{flexDirection: 'row'}}>
                        <Text style={{padding: 10, fontSize: 18, color: 'gray'}}>Let the rhythm of life guide you to a place where every moment is filled with joy and possibility.</Text>
                   </View>
                   
                   <FlatList 

                        horizontal={true}
                    
                        data={onlineReccommend}
                       
                        renderItem={
                            ({ item, index }) => {
                                console.log(item, index, item.uri);
                                return (
                                
                                    <View style={{marginTop: 20}}>
                                        <Image style={{width : 150,height: 200,  marginRight: 20,borderRadius:5}} source={{uri: item.uri}}/>

                                        <View style={{ marginTop : -40, height : 50 , width: 150}}>
                                            <Text style={{ fontSize:16, color : "white",fontWeight: 'bold', padding:10}}>{item.title}</Text>
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