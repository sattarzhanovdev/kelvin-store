import React from 'react'
import Lottie from "lottie-react";
import furniture from "./furniture.json";
import c from './lottie.module.scss'

const style = {
  height: 800,
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "seek",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "seek",
      frames: [45, 60],
    },
  ],
};

const LottieAnimation = () => {
  
  return (
    <div className={c.animation}>
      <Lottie
        className={c.lottie}
        animationData={furniture}
        style={style}
        interactivity={interactivity}
      />
    </div>
  )
}

export default LottieAnimation