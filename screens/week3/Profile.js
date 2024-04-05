import React from 'react';
import { View, Image, Text, TextInput, Button} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function Profile() {

    return (
        <View style={{flex: 1, justifyContent: 'space-around'}}>
            <View >
                <View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <FontAwesome name='user' size='200' color='black'/>       
                    <Text style={{color:'grey', fontSize:28, fontWeight: 'bold',alignSelf:'center'}}> Welcome 👋🏻</Text>   
      
                </View>
            </View>

            
        </View>

        
    );
}




