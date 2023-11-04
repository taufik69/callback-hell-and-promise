// const output = document.getElementsByTagName("h1");

// change attribute value with the helps of js
// let changeAttr = (output[0].style =
//   "background-color: red; padding:20px; color:white; text-align:center;");
// let setAttribute = output[0].setAttribute("bg", "black");
// let pInnerTag = output[0].getElementsByTagName("a")[0];
// console.log(pInnerTag.setAttribute("target", "_blank"));

// function setAttributeFun(targetItem, attribute) {
//   Object.keys(attribute).map((item) => {
//     targetItem.setAttribute(item, attribute[item]);
//     console.log(item);
//   });
// }

// const attribute = {
//   name: "taufik islam",
//   target: "_blank",
//   title: "testing anchor tag",
//   style: "background-color: salmon; color: white;",
// };

// setAttributeFun(pInnerTag, attribute);

/**
 * todo: remove child from html elements
 */

// console.log(output[0].removeChild(pInnerTag));

/**
 * todo : --> appendchild is allow just nodeElemets not a text
 * todo :  <p> </p> allows only html tag/dom node Elements
 * !Dont't accept : "not a normal string like this"
 */

// const body = document.querySelector("body");
// const div = document.createElement("div");
// const p = document.createElement("p");

// p.innerText = "taufik islam";
// div.appendChild(p);

// body.appendChild(div);

/**
 * todo : -->append is allow just nodeElemets  and also text
 * todo :  <p> </p> allows only html tag/dom node Elements and also accept "normal text like this"
 
 */

// const body = document.querySelector("body");
// const div = document.createElement("div");
// const p = document.createElement("p");

// body.append("hello motherfucker");
// p.innerHTML = "hello boss how are you";

// div.append(p);
// body.append(div);
