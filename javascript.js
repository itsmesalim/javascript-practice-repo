let myvar = "Hello, JavaScript!";
console.log(myvar);

// If Statement: Example
let age = 22;
if (age >= 18) {
  console.log("you can play the game");
}

// Else Statement: Example
let height1 = 4;
if (height1 >= 5) {
  console.log("you are tall enough");
} else {
  console.log("you are short for now");
}

// Else If Statement: Example
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Nisted if Example
let marks = 94;
let grad = "A";

if (marks >= 90) {
  if (grad == "A") {
    console.log("you top the class");
  }
}

let age1 = 16;
let country = "USA";

if (country == "USA") {
  if (age1 >= 16) {
    console.log("you can drive");
  }
}

// Conditional (Ternary) Operator: Example
let isMember = true;
let access = isMember ? "Granted" : "Denied";
console.log(access); // Granted

// Switch Statement: Example
let developer = "Webdeveloper";

switch (developer) {
  case "Webdeveloper":
    console.log("Develops websites");
    break;
  case "MobileDeveloper":
    console.log("Develops mobile apps");
    break;
  case "DataScientist":
    console.log("Analyzes data");
    break;
  default:
    console.log("Unknown profession");
    break;
}

// For Loop Example
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 8; i++) {
  console.log(i, " *  2 = ", i * 2);
}

// While Loop Example
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let number = 0;
while (number < 30) {
  console.log(`${number} is ${number % 2 === 0 ? " is even " : " is odd"}`);
  number++;
}

// Do While Loop: Example
let value = 0;
do {
  let remainder = value % 7;
  console.log(`the reminder of ${value} is  ${remainder}`);
  value++;
} while (value < 20);

// Array: Example
array = [1, 2, 3, "apple", true, "banana", { name: "Object" }];

console.log("array = ", array);

// Object: Example
let person = {
  name: "alas",
  age: 25,
  isMoslim: true,
};

console.log("person = ", person);

//accessing a value of object
console.log("here I only access Person's name:", person.name);

//Adding new value to object
person.email = "alas@example.com";
console.log("Updated person = ", person);

// To update an exuisting value of an objecct
person.age = 26;
console.log("Person after update:", person);

// To delete a property from object
delete person.isMoslim;
console.log("Person after delete:", person);

// for-of loop: Example
let arry = [10, 20, 30, 40, 50];
for (const element of arry) {
  console.log(`arry = [${element}]`);
}

// for-in loop: Example
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, ":", obj[key]);
}

// Functions: Example
function myName() {
  console.log("my Name is Salim Ullah");
}
myName();

// Parameter: and Arguments Example

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("alas"));

function myAge(age) {
  console.log(`I am ${age} years old`);
}

myAge(25);

// Rest Parameters: Example

function restFunction(...arguments1) {
  let sum = 0;
  for (let arg of arguments1) {
    sum += arg;
  }
  console.log(`sum = ${sum}`);
}

restFunction(2, 3, 4, 8);

function froutsCombination([...frouts]) {
  for (frout of frouts) {
    console.log(`this is ${frout}`);
  }
}

froutsCombination(["apple", "banana", "mangos"]);

// Function Expression: Example
const funexpression = function (value1, value2) {
  let number = value1 + value2;
  console.log("number = ", number);
};

funexpression(10, 20);

// Arrow Function Example
function add(a, b) {
  return a + b;
}

console.log(add(5, 10));

const add2 = (a, b) => {
  let sum = a + b;
  return a + b;
};

const addArrow = (a, b) => a + b;
console.log(addArrow(6, 10));

let num = 75;

if (num % 5 == 0) {
  if (num % 2 == 0) {
    console.log(`${num} is divisible by 5 and even`);
  } else {
    console.log(`${num} is divisible by 5 but odd`);
  }
} else {
  console.log(`${num} is not divisible by 5`);
}

// HTML DOM Examples

// finding elements using id
const myIdElement = document.getElementById("demo1");
console.log(myIdElement);

// finding elements using class name
const myClassElements = document.getElementsByClassName("myClass");
console.log(myClassElements);

// finding elements using tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//finding element using queryselector
const querySelector = document.querySelector(".myClass");
console.log(querySelector);

const a = document.querySelector(".myse");
console.log(a);

// To change the content of html elemnt
document.getElementById("changeContent").innerHTML =
  "but now i am changed using innerHTML property ";

// we can change image like
document.getElementById("changeImg").src = "/images/butterfly.jpg";

//To change style
const styleChange = document.getElementById("changeStyle");
styleChange.style.color = "red";
styleChange.style.fontWeight = "bold";
styleChange.style.fontSize = "30px";

// changes using eventListener

const changesByEvents = document.getElementById("addEventListenerbtnId");
changesByEvents.addEventListener("click", function () {
  changesByEvents.innerHTML = "I am Clicked using addEventListener";
  changesByEvents.style.backgroundColor = "pink";
  changesByEvents.style.border = "1px solid green";
  changesByEvents.style.borderRadius = "10px";
  changesByEvents.style.outline = "none";
});

function myFunction2() {
  console.log("button clicked");
  const changesByEvents = document.getElementById("eventHandlerbtnId");
  changesByEvents.innerHTML = "I am Clicked with event handler";
  changesByEvents.style.backgroundColor = "red";
  changesByEvents.style.border = "1px solid green";
  changesByEvents.style.borderRadius = "10px";
  changesByEvents.style.outline = "none";
}

const bulb = document.getElementById("bulbKey");
const btn = document.getElementById("bntKey");

var flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    btn.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";

    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    btn.style.backgroundColor = "transparent";
    btn.innerHTML = "ON";
    flag = 0;
  }
});

// Arrow Function
const myFunction = function (a, b) {
  z = a + b;
  console.log("result of normal function, z = ", z);
};

myFunction(34, 8);

const myArrowFunction = (a, b) => {
  z = a + b;
  console.log("result of Arrow Function is, z = ", z);
};

myArrowFunction(45, 7);

//Object destructuring
const objectDestructuring = {
  firstName: "king",
  lastName: "star",
  age: 24,
  designation: "web developer",
};

let { firstName, lastName, age: mySelfAge, designation } = objectDestructuring;

document.getElementById(
  "selfIntro"
).innerHTML = `I am ${firstName} ${lastName} and I am ${age} years old, and I am a ${designation}`;

//Array destructuring
const froutsAarray = ["mango", "orange", "banana", "coconut"];

const [mangoFrout, orangeFrout] = froutsAarray;

document.getElementById(
  "frouts"
).innerHTML = `I like ${mangoFrout} and ${orangeFrout} very much`;

//spread operator
const array1 = [34, 56, 78, 89];
const array2 = [80, 67, 56, 45, 23, 90];

const array3 = [...array1, ...array2];
document.getElementById(
  "spreadArray"
).innerHTML = `[...array1, ...array2] = ${array3}`;

//for-of loop
const arrayOfLoop = [
  "apple",
  "mango",
  "banana",
  "appricot",
  "coconut",
  "orange",
];

let elementsOfArray = "";
for (const element of arrayOfLoop) {
  elementsOfArray += element + " ";
  document.getElementById("arrayOfLoopId").innerHTML = elementsOfArray;
}

// Map method
const origionalarray = [2, 7, 6, 4, 8, 9];

const arrayWithMap = origionalarray.map((elements) => {
  let arrayValue = " " + elements * elements;
  return arrayValue;
});

document.getElementById(
  "origionalArrayId"
).innerHTML = `origional array = ${origionalarray}`;

document.getElementById(
  "arrayId"
).innerHTML = `new array using map method = ${arrayWithMap}`;

// Filter method

const arrayForFilter = [2, 5, 3, 6, 8, 1, 0, 4, 7, 9];

const filteredArray = arrayForFilter.filter((arrayForFilterElement) => {
  return arrayForFilterElement % 2 === 0;
});

console.log("filteredArray", filteredArray);

document.getElementById(
  "filteredOragionalArrayId"
).innerHTML = `Befor Filtered Array = ${arrayForFilter}`;

document.getElementById(
  "filteredArrayId"
).innerHTML = `Filtered Array = ${filteredArray}`;

const stringArray = ["apple", "mingo", "nariel", "coconut"];

const stringfilter = stringArray.filter((str) => str.includes("n"));
document.getElementById(
  "wordIncludeN"
).innerHTML = `Filtered the word that include 'n' = [${stringfilter}]`;

const strFilter = stringArray.filter((str) => {
  if (str === "mingo") {
    return str;
  }
});

document.getElementById(
  "mango"
).innerHTML = `filtered the mingo from an array = [${strFilter}]`;

// reduce() method
const reduceArry = [2, 3, 4, 6, 7, 4, 2, 7];

const sumOfReduceArray = reduceArry.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

document.getElementById(
  "reduceArrayId"
).innerHTML = `result of reduced array = ${sumOfReduceArray}`;

const mulOfRedArray = reduceArry.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});
document.getElementById(
  "multOfRedArray"
).innerHTML = `multplication of reduce arry = ${mulOfRedArray}`;

//Classes

class Product {
  constructor(productName, productPrice) {
    this.productName = productName;
    this.productPrice = productPrice;
  }

  displayProduct() {
    console.log(`Product name is = ${this.productName}`);
    console.log(`Product price is = ${this.productPrice}`);
  }
}

const product1 = new Product("shirt", 900);

product1.displayProduct();

// Event Handler Example
const eventFunction = () => {
  const changesByEventHandler = document.getElementById("eventHandlerId");
  changesByEventHandler.innerHTML = "I am Clicked using eventHandler";
  changesByEventHandler.style.backgroundColor = "red";
  changesByEventHandler.style.border = "1px solid green";
  changesByEventHandler.style.borderRadius = "10px";
  changesByEventHandler.style.outline = "none";
  changesByEventHandler.style.color = "white";
};

// onclick example

const singleClick = () => {
  const singleClickevent = document.getElementById("singleClickId");
  singleClickevent.innerHTML = " I m change with one click";
};

// ondblClick example
const dblClickEvent = document.getElementById("dblClicks");
const dblClick = () => {
  dblClickEvent.innerHTML = "I m change with doubble clicks";
};

// onMouseover & onMouseout
const highlight = () => {
  document.getElementById("mouseOverOutId").innerHTML = "Pointer is inside me";
  document.getElementById("mouseOverOutId").style.backgroundColor = "yellow";
};

const unhighlight = () => {
  document.getElementById("mouseOverOutId").innerHTML = "Hover Over Me";
  document.getElementById("mouseOverOutId").style.backgroundColor = "white";
};

//Example of keyboard events

const keydownFun = () => {
  console.log("the key is down");
  document.getElementById("keyInputId").style.backgroundColor = "orange";
};

const keypressFun = () => {
  console.log("key is pressed");
  document.getElementById("keyInputId").style.backgroundColor = "green";
};

const keyUpFun = () => {
  console.log("key is pressed up");
  document.getElementById("keyInputId").style.backgroundColor = "red";
};

//Form Events

const handleSubmit = (event) => {
  event.preventDefault();
  alert("Form Submitted!");
};

function changeFun() {
  let Subject = document.getElementById("changeId").value;
  document.getElementById("sudo").innerHTML = "Selected Subject: " + Subject;
  alert(`the value is change to ${Subject} `);
}

const focusFun = () => {
  document.getElementById("focusId").style.backgroundColor = "green";
};

const blurFun = () => {
  let y = document.getElementById("blurId");
  y.value = y.value.toUpperCase();
};

// DOM traversing

//parentNode example
const parentdiv = document.getElementById("box1").parentNode;
console.log("parent div = ", parentdiv);
// parentdiv.style.backgroundColor = "green";

//childNodes example
const childNodesdiv = document.getElementById("main-selector").childNodes;

console.log("childNodesdiv = ", childNodesdiv);

//children example
const childrendiv = document.getElementById("main-selector").children;
console.log("childrendiv = ", childrendiv);

for (const node of childrendiv) {
  console.log(`Node = ${node.nodeName}`);
  node.style.backgroundColor = "red";
}

//firstchild example
const firstChildnode = document.getElementById("main-selector").firstChild;
console.log("firstChild = ", firstChildnode);

// firstElementChild example
const firstElementChild = (document.getElementById(
  "main-selector"
).firstElementChild.style.backgroundColor = "yellow");

//lastchild example
const lastChildnode = document.getElementById("main-selector").lastChild;
console.log("lastChild = ", lastChildnode);

//lastElementChild example
const lastElementChild = (document.getElementById(
  "main-selector"
).lastElementChild.style.backgroundColor = "blue");

//previousSiblingElement example
const previousSiblingElement = (document.getElementById(
  "box3"
).previousElementSibling.style.backgroundColor = "purple");

//nextElementSibling example
const nextElementSibling = (document.getElementById(
  "box3"
).nextElementSibling.style.backgroundColor = "gray");

// createElement() example
const newElement = document.createElement("div");
newElement.innerHTML = "box8";
newElement.style.backgroundColor = "green";

//appendChild() example
document.getElementById("main-selector").appendChild(newElement);

// insertBefore() example
const newElementForinsert = document.createElement("div");
newElementForinsert.innerHTML = "insert before element";
newElementForinsert.style.backgroundColor = "pink";

const target = document.getElementById("main-selector");
target.insertBefore(newElementForinsert, target.childNodes[12]);

// replaceChild() example
const newElementForReplace = document.createElement("div");
newElementForReplace.innerHTML = "replace element by box5";
newElementForReplace.style.backgroundColor = "Crimson";

const replaceTarget = document.getElementById("main-selector");
let oldElementForReplace = replaceTarget.children[4];

replaceTarget.replaceChild(newElementForReplace, oldElementForReplace);

// removeChilde()  example
let removElement = replaceTarget.children[2];
replaceTarget.removeChild(removElement);
console.log("remoelement = ", removElement);

// localStorage example
localStorage.setItem("myName", "king jan"); //store data
localStorage.setItem("myAge", "89");
let data = localStorage.getItem("myName"); //get data

localStorage.removeItem("myAge"); // remove an item

// localStorage.clear(); // remov all data

console.log("data = ", data);

const showData = document.getElementById("showinData");
showData.innerHTML = data;

//nullish operator
let name1 = null;
let name2 = "king";
let user1 = name1 ?? "Guest";
let user2 = name2 ?? "khan";

document.getElementById("nullish").innerText = `${user1}, ${user2}`;

//switch statement
switch ((n = 6)) {
  case (n = 3):
    console.log("it,s three");
    break;

  case (n = 4):
    console.log("it,s four");
    break;

  case (n = 5):
    console.log("it,s five");
    break;

  case (n = 1):
    console.log("it,s one");

  default:
    console.log("it,s not match with anyone!");
}

//call-back function
function greetingFun(callBack) {
  console.log("main function");
  callBack(8, 4, 9, 6, 3, 2);
}

greetingFun((a, b, ...rest) => {
  console.log("call-back function");
  console.log("a + b = ", a + b);
  console.log("a + b = ", a + rest[0]);
});

//anonymus function
const anonymous = () => {
  console.log("hello anonyous");
};

anonymous();

// pure-function: returns the same output for the same input example:

const pureFunction = (name) => {
  console.log("hello ", name);
};

pureFunction("king komil");
pureFunction("komar junk");
pureFunction("khan");
pureFunction("malik");
pureFunction("mokash");
pureFunction("koryal");
