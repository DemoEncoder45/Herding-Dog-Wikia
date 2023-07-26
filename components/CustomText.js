import * as Font from 'expo-font';
import { Text } from 'react-native';
import React, {useState, useEffect} from 'react';

const CustomFont = (props) => {
    

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'Good-Dog': require('../assets/fonts/gooddog.ttf'),
                'Regular-FastHand': require('../assets/fonts/Fasthand-Regular.ttf')
            });

            setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded){
        return <Text> Loading... </Text>
    }

    return (
        <Text style={{...props.style, fontFamily: 'Good-Dog'}}>
            {props.children}
        </Text>
    )
}

export default CustomFont;