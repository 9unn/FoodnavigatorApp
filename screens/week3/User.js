import React from 'react';
import { View, Image, Text, TextInput, Button} from 'react-native';
import Profile from './Profile';
import { useNavigation } from '@react-navigation/native';


export default function User() {

    const navigation = useNavigation(); 

    return (
        <View style={{flex: 1,justifyContent:'center'}}>
            <View>
                <View style={{ flexDirection:'column',justifyContent:'center'}}>
                    <Text style={{color:'grey', fontSize:28, fontWeight: 'bold',alignSelf:'center',paddingBottom:300}}> Log In</Text>                
                </View>
            </View>

            <View style={{ flexDirection : "row", marginTop : -250 , borderRadius: 20, width: 500, height: 50, backgroundColor: 'white', justifyContent: 'center',alignItems: 'center',marginLeft:150}}>
                <TextInput style={{color:'grey'}}>Username</TextInput>
            </View>

            <View style={{ flexDirection : "row", borderRadius: 20, width: 500, height: 50, backgroundColor: 'white', justifyContent: 'center',alignItems: 'center',marginLeft:150,margin : 20}}>
                <TextInput style={{color:'grey'}}>Password</TextInput>
            </View>

            <View style={{ flexDirection : "row", marginTop : 0 , borderRadius: 30, width: 200, height: 40, backgroundColor: 'blue', justifyContent: 'center',alignItems: 'center',marginLeft:300}}>
                <Button title='Log In' color={'white'} onPress={()=>{ navigation.navigate("Profile"); }}/>
            </View>

            <Button title='Forgot Password'/>
            
        </View>

        
    );kp[';']
}




