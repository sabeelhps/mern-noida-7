class Point{
    private x: number;
    private y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public static distance(p1: Point, p2: Point): number{
        return Math.sqrt((p2.y - p1.y)**0.5 + (p2.x - p1.x)**0.5);
    }
}

const p1: Point = new Point(3, 4);
const p2: Point = new Point(5, 7);

console.log(Point.distance(p1, p2));