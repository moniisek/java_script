const canvasEl = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

function resizeCanvas(e) {
  let rect = canvas.getBoundingClientRect();
  const imageData = ctx.getImageData(rect.x, rect.y, rect.width, rect.height);
  canvasEl.width = window.innerWidth * 0.9;
  canvasEl.height = window.innerHeight * 0.8;
  rect = canvas.getBoundingClientRect();
  // TODO: better placing. responsively?
  // maybe use drawImage (promises, getting image from imageData)
  ctx.putImageData(imageData, rect.x, rect.y);
  ctx.strokeStyle = "#BADA55";
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);


let isDrawing = false;
let currentMouse = {x: 0, y: 0};
let lastMouse = currentMouse;
let hue = 0;
let increaseLineWidth = true;

function updateMouse(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

function draw(e) {
  if (isDrawing) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue >= 360 ? hue = 0 : hue++;

    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
      increaseLineWidth = !increaseLineWidth;
    }

    increaseLineWidth ? ctx.lineWidth++ : ctx.lineWidth--;

    lastMouse = currentMouse;
    currentMouse = updateMouse(e);
    ctx.beginPath();
    ctx.moveTo(lastMouse.x, lastMouse.y);
    ctx.lineTo(currentMouse.x, currentMouse.y);
    ctx.stroke();
  }
}

canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  currentMouse = updateMouse(e);
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', e => {
  isDrawing = false;
})

canvas.addEventListener("touchstart", e => {
  const rect = canvas.getBoundingClientRect();
  const mouseEvent = new MouseEvent("mousedown", {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  });
  canvas.dispatchEvent(mouseEvent);
});

canvas.addEventListener("touchmove", e => {
  const rect = canvas.getBoundingClientRect();
  const mouseEvent = new MouseEvent("mousemove", {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  });
  canvas.dispatchEvent(mouseEvent);
});

canvas.addEventListener("touchend", e => {
  const mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
});

// clear button
const clearButtonEl = document.querySelector("#clear-canvas");
clearButtonEl.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  ctx.clearRect(0, 0, rect.width, rect.height);
})
