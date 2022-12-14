const table = document.getElementById("table") as HTMLCanvasElement;
const ctx = table.getContext("2d") as CanvasRenderingContext2D;

class Particular {
    x: number;
    y: number;
    r: number;
    color: string;
    mx: number;
    my: number;
    tx: number;
    ty: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.r = 2;
        this.color = `rgba(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`;
        this.tx = Math.random() * 400;
        this.ty = Math.random() * 400;
        this.mx = Math.abs(this.x - this.tx);
        this.my = Math.abs(this.y - this.ty);
        console.log(this.mx, this.my);
    }

    render() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.closePath();
        ctx.fill();
    }

    move() {
    }
}

// new Particular(200, 200).render();

let arr: Particular[] = [];
for (let i = 0; i < 5; i++) {
    arr.push(new Particular(Math.random() * 200 + 100, Math.random() * 200 + 100))
}


setInterval(() => {
    ctx.clearRect(0, 0, 400, 400);
    arr.forEach(item => {
        item.move();
        item.render();
    });
}, 30);

interface SetParticular {
    width: number,
    height: number,
    round: number,
    color: string,
    cx: number,
    cy: number,
}