export default class Circle {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  isDead: boolean;
  alpha: number;
  constructor(
    id: number,
    x: number,
    y: number,
    radius: number,
    color: string,
    isDead: boolean
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isDead = isDead;
    this.alpha = 1;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.globalAlpha = this.alpha;
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
    context.restore();
  }

  update(context: CanvasRenderingContext2D) {
    this.draw(context);
  }
}
