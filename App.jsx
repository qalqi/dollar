import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback} from "react-native";
import Bird from "./components/Bird";
import Obstacles from "./components/Obstacles";

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclessLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclessLeftTwo] = useState(screenWidth + screenWidth/2 + 30);
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)
  const [score, setScore] = useState(0)
  const obstacleWidth = 60;
  const obstacleHeight = 300;
  const gap = 200;
  const gravity = 3;
  let gameTimmerId;
  let obstacLesLeftTimerId;
  let obstacLesLeftTimerIdTwo;
  const [isGameOver, setIsGameOver] = useState(false)

  //start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimmerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
      }, 30);

      return () => {
        clearInterval(gameTimmerId);
      };
    }
  }, [birdBottom]);
  console.log(birdBottom)

  const jump =() => {
    if (!isGameOver && (birdBottom < screenHeight)) {
      setBirdBottom(birdBottom => birdBottom + 50 )
      console.log('jumped')
    }
  }

  //start first obstacles
  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstacLesLeftTimerId = setInterval(() => {
        setObstaclessLeft((obstaclesLeft) => obstaclesLeft - 5);
      }, 30);
      return () => {
        clearInterval(obstacLesLeftTimerId);
      };
    } else {
      setObstaclessLeft(screenWidth)
      setObstaclesNegHeight( - Math.random() * 100)
      setScore(score => score + 1)
    }
  }, [obstaclesLeft]);

   //start second obstacles
  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstacLesLeftTimerIdTwo = setInterval(() => {
        setObstaclessLeftTwo((obstaclesLeftTwo) => obstaclesLeftTwo - 5);
      }, 30);
      return () => {
        clearInterval(obstacLesLeftTimerIdTwo);
      };
    } else {
      setObstaclessLeftTwo(screenWidth)
      setObstaclesNegHeightTwo( - Math.random() * 100)
      setScore(score => score + 1)
    }
  }, [obstaclesLeftTwo]);

  //check for collisions
  useEffect(() => {
    if ( 
    ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) ||
    birdBottom > (obstaclesNegHeight + obstacleHeight + gap - 30)) &&
    (obstaclesLeft > screenWidth/2 - 30 && obstaclesLeft < screenWidth/2 + 30)
    )
    ||
    ((birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) ) ||
    birdBottom > (obstaclesNegHeightTwo + obstacleHeight + gap - 30)) &&
    (obstaclesLeftTwo > screenWidth/2 - 30 && obstaclesLeftTwo < screenWidth/2 + 30)
    )
    
    { 
      
      console.log ('game over')
      gameOver ()
      
    }
  
  } )

  const gameOver = () => {
    clearInterval(gameTimmerId)
    clearInterval(obstacLesLeftTimerId)
    clearInterval(obstacLesLeftTimerIdTwo)
    setIsGameOver(true)
  }

  return (
    <TouchableWithoutFeedback onPress={jump}>
    <View style={styles.container}>
      {isGameOver && <Text>{score}<Text/>} 
      <Bird 
       birdBottom={birdBottom}
       birdLeft={birdLeft} 
       /> 
      <Obstacles
        color=  {'green'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstaclesNegHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft}
      />
      <Obstacles
        color=  {'yellow'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom= {obstaclesNegHeightTwo}
        gap={gap}
        obstaclesLeft={obstaclesLeftTwo}
      />
    </View> 
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
