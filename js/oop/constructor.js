
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1); //this is a way to call a function with a specific context (this)


const another = new Circle(1); //this is a way to create a new object with the Circle constructor function

    