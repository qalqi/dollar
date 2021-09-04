import React from 'react';
import { View } from 'react-native';

const Bird = ({birdBottom, birdLeft}) => {

    return (
        <View style={{
            position: 'absolute',
            backgroundColour: 'blue',
            width: 50,
            height: 60,
            left: birdLeft,
            bottom: birdBottom,
        }}/>
    )

}

export default Bird