const output = document.getElementsByTagName("h1");

// change attribute value with the helps of js
// let changeAttr = (output[0].style =
//   "background-color: red; padding:20px; color:white; text-align:center;");
let setAttribute = output[0].setAttribute("bg", "black");
let pInnerTag = output[0].getElementsByTagName("a")[0];
// console.log(pInnerTag.setAttribute("target", "_blank"));

function setAttributeFun(targetItem, attribute) {
  Object.keys(attribute).map((item) => {
    targetItem.setAttribute(item, attribute[item]);
    console.log(item);
  });
}

const attribute = {
  name: "taufik islam",
  target: "_blank",
  title: "testing anchor tag",
  style: "background-color: salmon; color: white;",
};

setAttributeFun(pInnerTag, attribute);
