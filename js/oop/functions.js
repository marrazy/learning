let number = 10;
let obj = { value: 10 };

function increase(number) {
    number++;
    obj.value++;
}

increase(number);
console.log(number); // 10
increase(obj.value);
console.log(obj.value); // 11