/**
 * check out the code pattern for lottie animation from
 * https://lottiereact.com/hooks/useLottieInteractivity
 */

import { useLottie, useLottieInteractivity } from "lottie-react";

import animationData from "../assets/ziggleTextAnimation.json";

const options = {
  animationData: animationData,
};

const ZiggleTextAnimation = () => {
  const lottieObj = useLottie(options);

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 0.55],
        type: "seek",
        frames: [0, 60],
      },
    ],
  });

  return Animation;
};

export default ZiggleTextAnimation;
