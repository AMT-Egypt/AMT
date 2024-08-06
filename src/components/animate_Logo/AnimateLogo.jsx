import { useEffect } from "react";
import { LogoIcon } from "../../icons/icons";
import "../../style/AnimateLogo.css";
export default function AnimateLogo() {
  useEffect(() => {
    function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
      let paths = document.querySelectorAll("path");
      let mode = repeat ? 'infinite' : 'forwards'
      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
      }
    }
    setTextAnimation(0.1, 2.3, 2, 'linear', '#e01b24', true);
  }, [])
  return (
    <LogoIcon />
  )
}