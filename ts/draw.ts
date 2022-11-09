const table = document.getElementById("table") as HTMLCanvasElement;
const ctx = table.getContext("2d") as CanvasRenderingContext2D;
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#dededf";
ctx.moveTo(100, 100);
ctx.lineTo(0, 0);
ctx.stroke();