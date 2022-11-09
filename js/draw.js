"use strict";
const table = document.getElementById("table");
const ctx = table.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#dededf";
ctx.moveTo(100, 100);
ctx.lineTo(0, 0);
ctx.stroke();
