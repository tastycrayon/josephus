import React, { useEffect, useRef } from "react";
import Circle from "../Helper/Circle";

function init(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  numberOfPerson: number,
  deadpool: number[]
) {
  const radiiOfLargeCircle = Math.min(canvas.width, canvas.height);
  const numberOfCircles = numberOfPerson;
  const radian = (Math.PI * 2) / numberOfCircles;
  const arcLength = Math.PI * radiiOfLargeCircle; //PI* Radii
  const Radii =
    numberOfCircles > 10 ? ((arcLength / numberOfCircles) * 4) / 5 : 70;
  const radius = Radii / 2;
  const distance = radiiOfLargeCircle / 2 - radius;

  let circles: any = [];
  const canvasWidth = canvas.width / 2;
  const canvasHeight = canvas.height / 2;

  for (let i = 1; i <= numberOfCircles; i++) {
    const x = canvasWidth + distance * Math.cos(radian * i);
    const y = canvasHeight + distance * Math.sin(radian * i);
    const isDead = deadpool.includes(i);
    const color = isDead ? "lightgray" : "blue";
    circles.push(new Circle(i, x, y, radius, color, isDead));
  }

  function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach((circle: any) => {
      circle.update(context);
    });
  }
  animate();
  return circles;
}

interface PropTypes {
  numberOfPerson: number;
  deadpool: number[];
}

const Canvas: React.FC<PropTypes> = ({
  numberOfPerson,
  deadpool,
}: PropTypes) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    //set resize property
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(context, canvas, numberOfPerson, deadpool);
    };
    handleResize(); //initate at load

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [numberOfPerson, deadpool]);
  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
