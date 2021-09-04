import React from 'react';
import { View, Text } from 'react-native';

const Bird = ({ birdBottom, birdLeft }) => {

    return <View style={{
        backgroundColor: "blue",
        width: 50,
        height: 60,
        borderRadius: 5,
        position: 'absolute',
        left: birdLeft,
        bottom: birdBottom,
    }} />;


}

export default Bird