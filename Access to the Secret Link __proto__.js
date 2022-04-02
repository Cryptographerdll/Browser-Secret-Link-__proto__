// create an object "engine"
const engine = {
    type: "Blink",
    license: "GNU LGPL",
    status: "Active"
};

// create a constructor "browser"

function Browser() {}

// Reference the object "engine" to the Prototype browser

Browser.prototype = engine;

// create an instance of the "browser" constructor

const browser = new Browser();
console.log(browser);

// check if an object is the prototype of the constructor

console.log(engine.isPrototypeOf(browser));
console.log(Object.getPrototypeOf(browser) == engine);

// give selected properties different values

browser.type = "Gecko";
browser.license = "Action script";

//! Access to this properties
console.log(browser.type, browser.license);

//! Look for a property that doesn't exist in the browser object

//! Access to the secret link that access to the prototype object
console.log(browser.__proto__);

//! Check if the object "engine" referenced to the "browser.prototype" is the same as the object showed in "browser.__proto__"