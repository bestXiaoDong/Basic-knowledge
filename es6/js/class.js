class Bar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get() {
        console.log(this.x,this.y);
    }   
}

new Bar('hello', 'world').get();