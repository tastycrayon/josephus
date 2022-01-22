export default class Circle {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  constructor(id: number, x: number, y: number, radius: number, color: string) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
    context.fillStyle = "white";
    context.font = `${this.radius}px Arial`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(`${this.id}`, this.x, this.y);
    context.closePath();
  }

  update(context: CanvasRenderingContext2D) {
    this.draw(context);
  }
}
