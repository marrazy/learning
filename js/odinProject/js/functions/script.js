// functions again
/*
function checkAge(age) {
    if (age>=18) {
        return true;
    } else {
        return confirm('Do you have permission from a parent/guardian over the age of 18?')
    }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
    alert('Access granted')
} else {
    alert('Access denied')
} 

function isPrime(n) {
    for (let i=2; i < n;i++) {
        if (n % i == 0) return false; 
    } 
    return true;
}

function showPrimes(n) {
    for (let i=2;i < n; i++) {
        if (!isPrime(i)) continue;

        console.log(i)
    }
}

showPrimes(11) 

// Rewrite it, to perform the same, but without if, in a single line.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
    return age > 18 ? true : confirm("Did your parents allow you?")
    // return CONDITION ? "IF CONDITION IS MET" : "IF CONDITION IS NOT MET"
}
let age = prompt('How old are you?', 18);
if (checkAge(age)) {
    alert("Good to go")
} else {
    alert("Sorry you have been blocked")
}
*/
function min(a, b) {
    if (a>b) {
        return b
    } else if (b>a) {
        return a
    } else {
        return a
    }
}

console.log(min(1,2))
console.log(min(-5, 2))
console.log(min(2,2))

function capitalize(string) {
    lowered = string.toLowerCase();
    word = lowered[0].toUpperCase() + lowered.slice(1);
    return word;
}

console.log(capitalize("ABCD"))
console.log(capitalize("AbCd"))
console.log(capitalize("abcd"))

function lastLetter(string) {
    return string[string.length - 1]
}
console.log(lastLetter("abcd"))

function FizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i%3 == 0 && i%5 == 0) {
            console.log("FizzBuzz")
        } else if (i%3 == 0) {
            console.log("Fizz")
        } else if (i%5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

FizzBuzz(15)