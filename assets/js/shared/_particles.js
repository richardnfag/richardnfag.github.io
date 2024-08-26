window.requestAnimFrame = (() => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

const navSize = 0;

let canvas = document.getElementById("canvas-particles");
let ctx = canvas.getContext("2d");
let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - navSize;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - navSize;

  initialize();
});

function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;

  this.vx = -1 + Math.random() * 1;
  this.vy = -1 + Math.random() * 1;

  this.radius = 3;

  this.draw = () => {
    ctx.fillStyle = "rgba(50, 50, 50, 1)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };
}

function initialize() {
  particles = [];

  Array(Math.floor(window.innerWidth / 5))
    .fill()
    .forEach((_) => particles.push(new Particle()));
}

function draw() {
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => p.draw());

  update();
}

function update() {
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x + p.radius > canvas.width) p.x = p.radius;
    if (p.y + p.radius > canvas.height) p.y = p.radius;
    if (p.x - p.radius < 0) p.x = canvas.width - p.radius;
    if (p.y - p.radius < 0) p.y = canvas.height - p.radius;

    for (let j = i + 1; j < particles.length; j++) {
      distance(p, particles[j]);
    }
  });
}

function distance(p1, p2) {
  let dist,
    dx = p1.x - p2.x,
    dy = p1.y - p2.y,
    minDist = 100;

  dist = Math.sqrt(dx * dx + dy * dy);

  if (dist <= minDist) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(70, 70, 70, " + (1.2 - dist / minDist) + ")";
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.closePath();

    let ax = dx / 10 ** 10,
      ay = dy / 10 ** 10;

    p1.vx -= ax;
    p1.vy -= ay;

    p2.vx += ax;
    p2.vy += ay;
  }
}

function animloop() {
  draw();
  requestAnimFrame(animloop);
}

initialize();
animloop();
