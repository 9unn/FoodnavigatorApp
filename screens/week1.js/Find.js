import React from 'react';
import { Image, ScrollView,  View } from 'react-native';
import Home from '../../components/week1.js/Home.js';
import Collections from '../../components/week1.js/Collections.js';
import Menu from '../../components/week1.js/Menu.js';



export default function Find() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 , margin: 20}}>

                <Home />
                
                <Collections/>
                

            </View>
            
                
        </ScrollView>
    );
}