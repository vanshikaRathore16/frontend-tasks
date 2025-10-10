// Button elements
let element = document.getElementById("btn");
let element2 = document.getElementById("btn1");
let element3 = document.getElementById("h1");

// setTimeout example (immediately cleared)
let timeoutt = setTimeout(() => {
    console.log("set timeout run");
}, 2000);
clearTimeout(timeoutt);

// setInterval example (immediately cleared)
let setInternall = setInterval(() => {
    console.log("set time run");
}, 2000);
clearInterval(setInternall);

// Custom Event
let myEvent = new CustomEvent("greet");

// Event listener for 'keypress' on a button (note: may not work without focus)
element2.addEventListener("keypress", () => {
    element3.innerText = "hello how are you";
});

// Listen for custom 'greet' event
element.addEventListener("greet", () => {
    alert("yes I'm working fine");
});

// Dispatch custom event on button click
element.addEventListener("click", () => {
    element.dispatchEvent(myEvent);
});

// Function declarations
const add = function (a, b) {
    console.log(a + b);
};

const add2 = (a, b) => a + b;

/* 
 Mouse Events 🖱️
click       → element clicked
dblclick    → double click on element
mouseover   → mouse over element
mouseout    → mouse leaves element
mousedown   → mouse button pressed
mouseup     → mouse button released
mousemove   → mouse moves inside element
Example: button.addEventListener("click", fn)
*/

/* 
⌨ Keyboard Events
keydown     → key is pressed
keyup       → key is released
keypress    → (deprecated) key is pressed and held
Example: document.addEventListener("keydown", fn)
*/

/* 
Form/Input Events
submit  → form submitted
change  → input changes & loses focus
input   → input changes immediately
focus   → element gets focus
blur    → element loses focus
Example: input.addEventListener("input", fn)
*/

/* 
 Debugging in JavaScript
1. Using console.log()
2. Using debugger keyword

How debugger works:
- Open DevTools (F12) → Sources tab
- Add a debugger statement
- Code pauses at debugger
- Hover to inspect variables
- Use controls to step through

Example:
debugger;
let x = 5;
let y = 10;
console.log(x + y);
*/

/* 
 Error Handling in JavaScript
try {
   // risky code
} catch (error) {
   console.log(error.name);    // e.g., TypeError
   console.log(error.message); // error message
   console.log(error.stack);   // stack trace
} finally {
   // cleanup code
}
You can also throw errors manually: throw new Error("something went wrong");
*/

/* 
 LocalStorage and SessionStorage
Methods:
- setItem(key, value)
- getItem(key)
- removeItem(key)
- clear()

LocalStorage persists across sessions
SessionStorage clears on tab/browser close

Example:
localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));
*/

/* 
 Event Phases: Capturing → Target → Bubbling
- Default: Bubbling phase
- Use { capture: true } for capturing phase
- stopPropagation() to stop event from bubbling/capturing
- Event delegation uses bubbling to handle child elements efficiently
*/

/* 
 Best Practices
- Use meaningful names & consistent formatting
- Leverage ES6+ features
- Avoid globals & memory leaks
- Optimize DOM access & loops
- Debounce/throttle frequent events
- Use async/await for async code
- Use proper data structures (Map, Set, etc.)
- Minify & bundle for production
*/
