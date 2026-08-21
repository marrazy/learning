// Not a good way to create an object
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
}
circle.draw();

// good way to create a new object: (factory function)
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle1 = createCircle(1);
circle1.draw();

// Constructor function (bro this is just a class in python)
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const another = new Circle(1);
another.draw(); //