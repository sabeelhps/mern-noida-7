class Car{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    startCar() {
        console.log(`Starting the car ${this.name}`);
    }

    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice) {
        if (newPrice < 0) {
            this.price = 0;
        } else {
            this.price = newPrice;
        }
    }


    static startCar() {
        console.log('Starting the carr....');
    }
}

const c1 = new Car("Ferrari", 1000);
const c2 = new Car("BMW", 2000);


// console.log(c1);
// console.log(c2);

class RacingCar extends Car{
    constructor(name, price, speed) {
        super(name, price);
        this.speed = speed;
    }
}


const r1 = new RacingCar("Scorpio", 3000, 240);

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        return Math.hypot((p2.y - p1.y), (p2.x - p1.x));
    }
}

const p1 = new Point(3, 4);
const p2 = new Point(5, 7);

