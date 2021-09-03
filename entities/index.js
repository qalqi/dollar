import Matter from "matter-js"
import Bird from '../components/bird';

export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.gravity.y = 0.4;

    return {
        physics: { engine, world },
        Bird: Bird(world, 'green', { x: 50, y: 200 }, { height: 40, width: 40 })
    }
}