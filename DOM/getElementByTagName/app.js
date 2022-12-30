//select the element or group of elements that we want 
//decide the effect we want to apply to the selection

//getElementByTagName('tagname');
//HTML collections = array-like objects
//index,length propert but not array method (forEach)

//querySelectorAll() in most cases
//NodeList - objects are collections of nodes
//can run forEach
//turn them into array - spread operator [...]
//after that can use any array properties and methods







const headings = document.getElementsByTagName('h2');

headings[0].style.color = 'red';
console.log(headings);
console.log(headings.length);

const items = document.getElementsByTagName('li');
items[2].style.color = 'orange';
// items.forEach((item) => {});         //not pososible will thorow error in console

const betterItems = [...items]

betterItems.forEach((item)=> {
    console.log(item);
})

console.log(items);
console.log(betterItems);