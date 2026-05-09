// Example 1 -  Working with innerText & textContent
console.log("\nSECTION 1 - Working with innerText & textContent");

// Access h1 text content
const h1IT = document.querySelector("h1");
console.log(h1IT.innerText);

// Access whole body text content
const bodyqS = document.body.innerText;
console.log(bodyqS);

// Update h1 text content (in future linked to events so not an HTML change)
h1IT.innerText = "Hello JavaScipt Chapter 14 Updated DOM Manipulate World!";

// Access first aragraph  text content with textContent
const pTC = document.querySelector("p");
console.log(pTC.innerText);
console.log(pTC.textContent);

// Example 2 -  innerHTML
console.log("\nSECTION 2 - innerHTML");

// Access form HTML and text content
const formIH = document.querySelector("form");
console.log(formIH.innerHTML);

// Access first ul HTML and text content
const ulIH = document.querySelector("ul");
console.log(ulIH.innerHTML);

// Update form content (using a string literal to format it)
//formIH.innerHTML = `<input type="text" placeholder="Paddington Bear Name" />
//<input type="password" placeholder="password" />
//<input type="submit" />`;
// Commented out as form updated in HTML

// Add h1 content
const h1IH = document.querySelector("h1");
h1IH.innerHTML += ` - <u>it's great!</u>`;

// Example 3 -  value, src, href, and more
console.log("\nSECTION 3 - value, src, href, and more");

// See the value of items in the form
const formVal = document.querySelectorAll("input");
console.dir(formVal);
//Needs to be run in the console - value of first field
console.log(formVal[0].value);
//Needs to be run in the console - value of checkbox field
console.log(formVal[3].checked);
//Needs to be run in the console - value of last field
console.log(formVal[4].value);

//Update password placeholder text
formVal[1].placeholder = "Please enter a password!";

// View href of anchor tag
const a = document.querySelector("a");
console.log(a.href);
//Change href of anchor tag
a.href = "https://rcts.org.uk/branches/branch-cbr-cambridge/gallery-march/";

// View image source
const img = document.querySelector("img");
console.log(img.src);
// Change image source - do in console
//img.src =
//  "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Example 4 -  Getting & Setting Attributes
console.log("\nSECTION 4 - Getting & Setting Attributes");

// Look for values of the input range element
const range = document.querySelector("input[type='range']");
let maxGA = range.getAttribute("max");
console.log(maxGA);
let stepGA = range.getAttribute("step");
console.log(stepGA);
let typeGA = range.getAttribute("type");
console.log(typeGA);

// Set value in the input range element
range.setAttribute("max", "800");
console.log(range.value);

// Change type of input
// range.setAttribute("type", "radio");
// Commented out - so doesn't change site for next examples

// Example 5 -  Finding Parent/Children/Siblings
console.log("\nSECTION 5 - Finding Parent/Children/Siblings");

// Find and display first LI element and parent
const firstLI = document.querySelector("li");
console.dir(firstLI);
console.log(firstLI.parentElement);
console.log(firstLI.parentElement.parentElement);
console.log(firstLI.parentElement.parentElement.parentElement);

// Find and display first UL element and children
const firstUL = document.querySelector("ul");
console.dir(firstUL);
console.log(firstUL.children);
console.log(firstUL.children[0]);
console.log(firstUL.children[0].innerText);

//  Access next sibling to the first LI Element
console.log(firstLI.nextElementSibling);
console.log(firstLI.nextElementSibling.nextElementSibling);

//  Access previous sibling to the third LI Element
const thirdLI = firstLI.nextElementSibling.nextElementSibling;
console.log(thirdLI);
console.log(thirdLI.previousElementSibling);
console.log(thirdLI.previousElementSibling.previousElementSibling);

// Example 6 -  Changing Multiple Elements
console.log("\nSECTION 6 - hanging Multiple Elements");

// Select all the LIs and loop through
const allLI = document.querySelectorAll("li");
console.dir(allLI);
//forr (i = 0; i < allLI.length; i++) {
//  console.log(allLI[i].innerText);
//  allLI[i].innerText = "We love Reading";
//}
//for (let li of allLI) {
//  li.innerHTML = "We love <b>Cambridge United<b>";
//}

// Example 7 -  Altering Styles
console.log("\nSECTION 7 - Altering Styles");

// Change H1 color style to darkorange
const h1S = document.querySelector("h1");
h1S.style.color = "darkorange";

// Change LI color styles to ones in array
// Use allLI from above
// const colors = ["red", "green", "blue", "orange", "pink", "brown"];
// for (i = 0; i < allLI.length; i++) {
//   allLI[i].style.color = colors[i];
// }

// Example 8 -  getComputedStyle
console.log("\nSECTION 8 - getComputedStyle");

// get computed H1 styles
const h1CS = document.querySelector("h1");
const h1Styles = getComputedStyle(h1CS);
console.dir(h1Styles);
console.log(h1Styles.color);
console.log(h1Styles.fontSize);

// Example 9 -  Manipulating Classes
console.log("\nSECTION 9 - Manipulating Classes");

// Update style applied to the todo class
const todo = document.querySelector("#todos .todo");
// Update each style using style
//todo.style.color = "grey";
//todo.style.textDecoration = "line-through";
//todo.style.opacity = "50%";

//Update class allocation for element using get/setAttribute
console.log(todo.getAttribute("class"));
todo.setAttribute("class", "todo done");

//Update class allocation for element using classList
console.log(todo.classList);
todo.classList.remove("done");
todo.classList.add("done");
todo.classList.toggle("done");

// Example 10 -  Creating Elements
console.log("\nSECTION 10 - Creating Elements");

// Create new h2 Element
const h2New = document.createElement("h2");
console.dir(h2New);
h2New.innerText = "I like trains!";
h2New.classList.add("special");
console.log(h2New);

// Append newly created h2 Element as a child to the Section
const section = document.querySelector("section");
section.appendChild(h2New);

// Append newly created image Element to body
const newImg = document.createElement("img");
newImg.src =
  "https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80";
newImg.style.width = "300px";
document.body.appendChild(newImg);

// Create new Link and append
const newLink = document.createElement("a");
newLink.innerText = "Nadia Video";
newLink.href =
  "https://www.google.com/search?sca_esv=9b0cec2fe7cd0d24&sxsrf=ANbL-n64qURvUMx39OsdN9HF9CFyw442qQ:1778254997335&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxqtD2OJgNgqfuyx0ErWHyBWBrNpSfo8CoL7Ht9sI_lUf5bA8gr_l0uTHVh8YDYiJUAfZE6lbMORq7BcoN45QqdRZCAnygk1zfALTDeetDIRI3adTxQ9bfKVQs4BHOYEF3mxedpQ&q=nadia+batson&sa=X&sqi=2&ved=2ahUKEwjnqb6LhKqUAxVARv4FHexeJ9UQtKgLegQIUBAB&biw=1781&bih=1505&dpr=0.8#fpstate=ive&vld=cid:20047843,vid:CzP5djwg20E,st:0";
const firstP = document.querySelector("p");
firstP.appendChild(newLink);

// Example 11 -  Append, Prepend, & insertBefore
console.log("\nSECTION 11 - Append, Prepend, & insertBefore");

// Append li at the end of the first ul
const parentUL = document.querySelector("ul");
const newLI = document.createElement("li");
newLI.innerText = "Add a new li in";
parentUL.appendChild(newLI);

// Insert li at the top of the first ul
const liFirst = document.querySelector("li.todo");
console.log(liFirst);
parentUL.insertBefore(newLI, liFirst);

// Insert li above the last li in the first ul
const liLast = document.querySelectorAll("li.todo")[2];
console.log(liLast);
parentUL.insertBefore(newLI, liLast);

// Insert italics text before first paragraph
const iT = document.createElement("i");
iT.innerText = "Some js added words in italics";
const pFirst = document.querySelector("p");
//firstP.insertAdjacentElement("beforebegin", iT);
firstP.insertAdjacentElement("afterend", iT);

// Example 12 -  removeChild & remove
console.log("\nSECTION 12 - removeChild & remove");

// Example 13 -  NBA Scores Chart Pt1.
console.log("\nSECTION 13 - NBA Scores Chart Pt1.");

// Example 14 -  NBA Scores Chart Refactor
console.log("\nSECTION 14 - NBA Scores Chart Refactor");
