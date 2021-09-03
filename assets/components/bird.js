import Matter from 'matter-js'
import React from 'react'

const Bird = this.props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.mim.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.mim.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody /2

    const color = props.color;

    return(
        <view style={{ 
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody,
        }}/>
    )

}

export default function bird(world, color,pos, size) => {
   const initialBird = Matter.Bodies.rectangle(
       pos.x,
       pos.y,
       size.width,
       size.height,
       {label:'Bird'}
    )
    Matter.World.add(world, initialBird) 

   return {
        body: initialBird,
        color,
        pos,
        renderer: <Bird/>
    }
}
