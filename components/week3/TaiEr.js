import React, { useEffect, useState } from 'react';
import { View, Image, Text, TextInput, Button} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function TaiEr() {

    const [onlineTaiEr, setOnlineTaiEr] = useState([]);   

    const loadOnlineTaiEr = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/9unn/FoodnavigatorApp/main/fast.json');
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
            <View >
                <View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                   <Image style={{width:500, height:300}} source={require('../../assets/week1/tai-er.webp')}></Image>
                </View>
            </View>

            
        </View>

        
    );
}




