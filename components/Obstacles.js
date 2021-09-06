import React from 'react';
import { View, Text } from 'react-native';

const Obstacles = ({obstaclesLeft, obstacleWidth, obstacleHeight, gap}) => {

    return (
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: 0 + obstacleHeight + gap,
            }}/>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: 0,
            }}/>
        </>    
    )

}

export default Obstacles

