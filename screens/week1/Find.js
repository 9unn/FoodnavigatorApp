import React from 'react';
import { Image, ScrollView,  View } from 'react-native';
import Home from '../../components/week1/Home';
import Collections from '../../components/week1/Collections';
import Menu from '../../components/week1/Menu';
import Vibes from '../../components/week1/Vibes';



export default function Find() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 , margin: 20}}>

                <Home />
                <Menu />
                <Collections/>
                <Vibes />
               
               
            </View>
            
                
        </ScrollView>

    
    );
}
