import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Bird from './components/Bird.js';

export default function App() {
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom ]= useState(screenHeight/2)
  const gravity = 3
  let gameTimmerId

  //start bird falling
  useEffect(() => {
    if (birdBottom > 0 ) {
      gameTimmerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30 )

      return () => {
        clearInterval(gameTimmerId)
      }
    }
  } , [birdBottom] )

  return (
    <View style={styles.container}>
     <Bird
       birdBottom={birdBottom}
       birdLeft={birdLeft}
     />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
