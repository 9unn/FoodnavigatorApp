import React, { useEffect, useState } from 'react';
import { View, Image, Text, TextInput, Button} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function TaiEr(props) {

    const navigation = useNavigation(); 


    const [onlineTaiEr, setOnlineTaiEr] = useState([]);   

    const loadOnlineTaiEr = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/9unn/FoodnavigatorApp/main/food.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineTaiEr(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadOnlineTaiEr();
    }, []);
    

    return (
        <View style={{flex: 1, justifyContent: 'space-around'}}>
            <View style={props.style}>
                <View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                   <Image style={{width:700, height:500 , borderRadius: 20}} source={require('../../assets/week1/tr.webp')}></Image>
                   <Text style={{fontSize: 28, padding: 20, fontWeight:'bold'}}>Tai Er</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text>999/9 ถ. พระรามที่ 1 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330 ประเทศไทย กรุงเทพมหานคร </Text>
                    <FontAwesome name='map-marker' size={20} onPress={()=>{ navigation.navigate("Location"); }}/>
                </View>
            </View>

            
        </View>

        
    );
}




