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
for (i = 0; i < allLI.length; i++) {
  console.log(allLI[i].innerText);
  allLI[i].innerText = "We love Reading";
}
for (let li of allLI) {
  li.innerHTML = "We love <b>Cambridge United<b>";
}

// Example 7 -  Altering Styles
console.log("\nSECTION 7 - Altering Styles");

// Example 8 -  getComputedStyle
console.log("\nSECTION 8 - getComputedStyle");

// Example 9 -  Manipulating Classes
console.log("\nSECTION 9 - Manipulating Classes");

// Example 10 -  Creating Elements
console.log("\nSECTION 10 - Creating Elements");

// Example 11 -  Append, Prepend, & insertBefore
console.log("\nSECTION 11 - Append, Prepend, & insertBefore");

// Example 12 -  removeChild & remove
console.log("\nSECTION 12 - removeChild & remove");

// Example 13 -  NBA Scores Chart Pt1.
console.log("\nSECTION 13 - NBA Scores Chart Pt1.");

// Example 14 -  NBA Scores Chart Refactor
console.log("\nSECTION 14 - NBA Scores Chart Refactor");
