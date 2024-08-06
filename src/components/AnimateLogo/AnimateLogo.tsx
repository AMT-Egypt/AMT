import React, { useEffect } from "react";
import { LogoIcon } from "../../icons/icons";
import "../../style/AnimateLogo.css";

const AnimateLogo: React.FC = () => {
  useEffect(() => {
    function setTextAnimation(
      delay: number,
      duration: number,
      strokeWidth: number,
      timingFunction: string,
      strokeColor: string,
      repeat: boolean
    ) {
      const paths = document.querySelectorAll<SVGPathElement>("path");
      const mode = repeat ? 'infinite' : 'forwards';
      paths.forEach((path, i) => {
        const length = path.getTotalLength();
        path.style.strokeDashoffset = `${length}px`;
        path.style.strokeDasharray = `${length}px`;
        path.style.strokeWidth = `${strokeWidth}px`;
        path.style.stroke = strokeColor;
        path.style.animation = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style.animationDelay = `${i * delay}s`;
      });
    }

    setTextAnimation(0.1, 2.3, 2, 'linear', '#e01b24', true);
  }, []);

  return <LogoIcon />;
};

export default AnimateLogo;
