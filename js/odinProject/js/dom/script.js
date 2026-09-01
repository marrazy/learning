/*
// selects the #container div
const container = document.querySelector("#container")

// selects the first child of the container div (display)
//const display = container.firstElementChild
//console.log(display)

//specifically selects the .controls div
//const controls = document.querySelector(".controls")
// selects the prior sibling
const display = controls.previousElementSibling;
console.log(display)

//create a new element (this is a div) - this makes it in memory so it wont show up in the DOM
const div = document.createElement("div")

container.append(div)

//Styling divs
div.style.color = "blue"

//Inline styling
div.setAttribute("style", "color: blue; background: white;");
*/


//Manipulate the DOM
const container =  document.querySelector("#container")

const content = document.createElement("div")
content.classList.add("content") // this gives the class 'content' to the div (so <div class="content">)
content.textContent = "This is a glorious text-content!" //dont use innerHTML as it is prone to XSS attack

container.appendChild(content)


//Exercise
/*
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

//p1
const para = document.createElement("p")
para.style.color = 'red'
para.textContent = 'Hey I\'m Red'
container.append(para)

//p2
const text = document.createElement("h3")
text.style.color = 'blue'
text.textContent = 'I\'m a blue h3!'
container.append(text)

//Part 3
const box = document.createElement("div")
box.style.backgroundColor = 'pink'
box.style.borderColor = 'black'

const boxTitle = document.createElement("h1")
boxTitle.textContent = "I am in a div"

const boxPara = document.createElement("p")
boxPara.textContent = "ME TOO"

box.append(boxTitle)
box.append(boxPara)

container.append(box)


// Button DOM Manipulation
// Arrow methods are lowk useless and instead you should make a function for it

/*
const btn = document.querySelector("#btn")

btn.onclick = () => alert("Hello world!")

const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", () => {
  alert("Hello World");
});

*/

// Using functions
function alertMe() {
    alert("Clicked! JS Worked")
}

const btn = document.querySelector("#btn")
btn.onclick = alertMe // WAY EASIER


const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", alertMe)

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener("click", alertMe)
})