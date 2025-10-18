// DOM (Document Object Modal), programming interface
// to access Web Page (HTML Document)
// (i) Search;
// (ii) create new Element;
// (iii) edit ;
// (iv) remove;
// (v) action to Events;
// __________________________________________________________________________________________________________
// getElementById() = ID (element direct hwat tal)
// getElementsByClassName() = Class
// getElementByTagName() = Tag
// querySelector() = ID,Class,Tag (element direct htwat tal)
// querySelectorAll() ID,Class,Tag (Array nae lar mar)

let val;
val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;
val = document.links; // HTMLCollection(6)
val = document.links[0]; // <a href="#" id="delete-item1" class="delete-item"><i class="fa-solid fa-trash"></i></a>
val = document.links[3]; // <a href="#" id="delete-item4" class="delete-item"><i class="fa-solid fa-trash"></i></a>
val = document.links[3].id; // delete-item4
val = document.links[5].id; // clearall
val = document.links[3].className; // delete-item
val = document.links[3].classList; // DOMTokenList ['delete-item', value: 'delete-item']
val = document.links[3].classList.value; // delete-item
val = document.forms; // HTMLCollection [form#form.form, form: form#form.form]
val = document.forms.form; // form#form.form
val = document.forms[0];
val = document.forms[0].id; // form
val = document.forms[0].className; // form
val = document.forms[0].classList; // DOMTokenList ['form', value: 'form']
val = document.forms[0].classList[0]; // form
val = document.forms[0].action; // http://127.0.0.1:5500/l52documentobjectmodal.html
val = document.forms[0].method; // get
val = document.images; // HTMLCollection [img#loading.loading, loading: img#loading.loading]
val = document.images[0]; // img#loading.loading
val = document.images[0].id; // loading
val = document.images[0].className; // loading
val = document.images[0].classList; // DOMTokenList ['loading', value: 'loading']
val = document.images[0].classList[0]; // loading
val = document.images[0].alt; // loader
val = document.images[0].src; // https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2Fd6cd5151c04765d1992edfde14483068%2Ftenor.gif%3Fitemid%3D5662595&f=1&nofb=1&ipt=1ec22cdde141cff9f5d8d8e6aa41eaa55a1c3e42ce29316636c463f08206de7c
val = document.scripts; // HTMLCollection [script]
val = document.scripts[0]; // <script src="js/documentobjectmodal.js"></script>
val = document.scripts[0].src;
val = document.scripts[0].type; // text/javascript
// console.log(val);
// ==> Change Style
document.getElementById("tasktitle").style.backgroundColor = "lightgreen";
document.getElementById("tasktitle").style.color = "#fff";
document.getElementById("tasktitle").style.padding = "5px";
// Change Content
// document.getElementById("tasktitle").textContent = "My Job";
// document.getElementById("tasktitle").innerText = "My Task";
// document.getElementById("tasktitle").innerHTML =
//   "<span style='color:steelblue;font-size:25px;text-decoration:underline;'>My Todo</span>";
// ==> Call By CLass Name (Class)
// let list = document.getElementsByClassName("list-group-item");
// console.log(list); // HTMLCollection(5)
// console.log(list[2]);
// list[2].style.color = "blue";
// list[2].textContent = "Have to visit";
// list[2].innerText = "Have to cook";
// list[2].innerHTML = "Have to read <a href='#' id='delete-item3' class='delete-item'><i class='fa-solid fa-trash'></i>";
// ==> Call By Tag Name(Element)
// const litags = document.getElementsByTagName("li");
// console.log(litags); // HTMLCollection
// console.log(litags[1]);
// litags[1].style.color = "purple";
// litags[1].innerHTML = `Hava to fight <a href="#" id="delete-item3" class="delete-item"><i class="fa-solid fa-trash"></i>`;
// ==> Call By QuerySelector
// console.log(document.querySelector("#tasktitle")); // h4#tasktitle
// console.log(document.querySelector(".card-title")); // h3.card-title
// console.log(document.querySelector("h3")); // h3.card-title
// console.log(document.querySelector("li")); // only first li
// console.log(document.querySelector(".list-group-item")); // only first li
// document.querySelector("li").style.color = "navy";
// document.querySelector("li").style.fontFamily = "monospace";
// document.querySelector("ul li").style.color = "violet";
// document.querySelector("ul li:nth-child(odd)").style.color = "red";
// document.querySelector("ul li:nth-child(even)").style.color = "blue";
// document.querySelector("ul li:last-child").style.color = "green";
// document.querySelector("ul li:last-of-type").style.color = "yellow";
// document.querySelector("ul li:nth-of-type(4)").style.color = "crimson";
// ==> Query Selector All
// console.log(document.querySelectorAll("#tasktitle")); // NodeList [h4#tasktitle]
// console.log(document.querySelectorAll("#tasktitle")[0]); // h4#tasktitle
// console.log(document.querySelectorAll(".card-title")); // NodeList [h3.card-title]
// console.log(document.querySelectorAll(".card-title")[0]); // NodeList [h3.card-title]
// console.log(document.querySelectorAll("li")); // Nodelist
// console.log(document.querySelectorAll("li")[2]);
// console.log(document.querySelectorAll(".list-group-item")); // Nodelist
// console.log(document.querySelectorAll("ul .list-group-item")[3]);
// const listitems = document.getElementsByClassName("list-group-item");
let listitems = document.querySelector("ul").getElementsByClassName("list-group-item");
// console.log(listitems); // HTMLCollection(5)
// console.log(typeof listitems); // object
// console.log(listitems[1]);
// Note: HTMLCollection nae so forEach nae loop pat loa ma ya
// listitems.forEach((listitem) => {
//   console.log(listitem); // error . forEach is not a function = array ma hote tat kaung ko looping pat mi tat error
// });
// Array change pee mha forEach nae looping pat
listitems = Array.from(listitems);
// console.log(listitems);
// console.log(typeof listitems);
// listitems.forEach((listitem) => {
//   console.log(listitem);
// });
// const liitems = document.querySelectorAll(".list-group-item");
const liitems = document.querySelectorAll("ul.list-group li.list-group-item");
// Nodelist nae so tan looping pat loa ya tal
// console.log(liitems); // Nodelist
// liitems.forEach((liitem, idx, arr) => {
//   //   console.log(liitem);
//   liitem.innerHTML = `${++idx}. Have to Sleep <a href="#" id="delete-item2" class="delete-item"><i class="fa-solid fa-trash"></i></a>`;
//   liitem.style.color = "red";
//   liitem.style.fontSize = 20 + "px";
// });
// const listodd = document.querySelectorAll("li:nth-child(odd)");
// console.log(listodd);
// listodd.forEach((listodd) => {
//   console.log(listodd);
//   listodd.style.backgroundColor = "gray";
// });
// const listeven = document.querySelectorAll("li:nth-child(even)");
// console.log(listeven);
// listeven.forEach((listeven) => {
//   console.log(listeven);
//   listeven.style.backgroundColor = "orange";
// });
// for (let i = 0; i < listeven.length; i++) {
//   console.log(listeven[i]);
//   listeven[i].style.backgroundColor = "silver";
// }
// ==> Parent to Children
// let getli = document.querySelector("ul li");
// let getli = document.querySelector("li.list-group-item");
let getli = document.querySelector("li.list-group-item:first-child");
// console.log(getli);
let childrens;
let getul = document.querySelector("ul.list-group");
childrens = getul.children;
// console.log(childrens); // HTMLCollection
// console.log(childrens[1]);
// console.log(getul.children[1]);
// childrens[1].textContent = "Have to Cook";
// childrens[1].innerHTML = "Have to Read";
getul.children[1].innerHTML = `Have to Sleep <a href="#" id="delete-item2" class="delete-item"><i class="fa-solid fa-trash"></i></a>`;
// Parent to children to children
let chl = getul;
chl = getul.children;
chl = getul.children[1];
chl = getul.children[1].children;
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].classList.value;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].href;
chl = getul.children[1].children[0].children;
chl = getul.children[1].children[0].children[0];
chl = getul.children[1].children[0].children[0].classList;
chl = getul.children[1].children[0].children[0].classList.value;
chl = getul.children[1].children[0].children[0].classList[0];
chl = getul.children[1].children[0].children[0].classList[1];
// console.log(chl);
// * Child ELement Count
// chl = getul.children.length; //? di nee nae lae khaw loa ya tal
chl = getul.childElementCount; //* di nee nae lae khaw loa ya tal
chl = getul.children[0].children; // ! HTMLCollection(1)
chl = getul.children[0].childElementCount; //! 1
console.warn(chl);
// ==> Children to Parent
// let getfirstli = document.querySelector("li");
let getfirstli = document.querySelector("li.list-group-item");
// console.log(getfirstli);
let getparent = getfirstli.parentElement;
// console.log(getparent);
let cardfooter = getfirstli.parentElement.parentElement;
// console.log(cardfooter);
let card = getfirstli.parentElement.parentElement.parentElement;
// console.log(card);
let container = getfirstli.parentElement.parentElement.parentElement.parentElement;
// console.log(container);
//=> Next element Sibling
let getsibling = getfirstli;
// console.log(getsibling);
getsibling = getfirstli.nextElementSibling;
// console.log(getsibling);
getsibling = getfirstli.nextElementSibling.nextElementSibling;
// console.log(getsibling);
getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
// console.log(getsibling);
getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// console.log(getsibling);
// Previous Element Sibling
getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// console.log(getsibling);
let getprevsiblings = getsibling.previousElementSibling;
// console.log(getprevsiblings);
getprevsiblings = getsibling.previousElementSibling.previousElementSibling;
// console.log(getprevsiblings);
getprevsiblings = getsibling.previousElementSibling.previousElementSibling.previousElementSibling;
// console.log(getprevsiblings);
getprevsiblings =
  getsibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
// console.log(getprevsiblings);
// Create Element
const newli = document.createElement("li");
// Add ID
newli.id = "newitem";
// Add Class
// newli.className = "list-group-item haha";
newli.classList.add("list-group-item");
newli.classList.add("delete-me");
newli.classList.add("remove-me");
newli.classList.add("haha", "hehe", "hoho");
// console.log(newli);
newli.classList.remove("remove-me");
// console.log(newli);
// Add attribute , setAttribute(attname,value)
newli.setAttribute("title", "newtitle");
// console.log(newli);
// console.log(newli.getAttribute("title"));
// console.log(newli.getAttributeNames());
// console.log(newli.getAttributeNames()[0]);
// console.log(newli.getAttributeNames()[1]);
// console.log(newli.getAttributeNames()[2]);
// newli.textContent = "Hello world";
// newli.innerText = "Hello John";
// newli.innerHTML = `Hello John <a href="#" id="delete-item2" class="delete-item"><i class="fa-solid fa-trash"></i></a>`;
// let newText = document.createTextNode("Hello World!");
// newli.appendChild(newText);
newli.appendChild(document.createTextNode("have to cook!"));
const newlink = document.createElement("a");
newlink.id = "delete-item6";
newlink.classList = "delete-item";
newlink.href = "#";
const newicon = document.createElement("i");
newicon.classList.add("fa-solid", "fa-trash");
newlink.appendChild(newicon);
newli.appendChild(newlink);
getul.appendChild(newli);
// console.log(newli);
// ==> Replace Element , replaceChild(new,old)
const oldtitleh4 = document.getElementById("tasktitle");
// console.log(oldtitleh4);
const newtitleh2 = document.createElement("h2");
newtitleh2.id = "tasktitle";
// newtitleh2.textContent = "All My Tasks";
const newcaption = document.createTextNode("hello john how are you?");
newtitleh2.appendChild(newcaption);
newtitleh2.style.color = "yellow";
newtitleh2.style.backgroundColor = "black";
newtitleh2.style.textAlign = "center";
const getcardfooter = document.querySelector(".card-footer");
getcardfooter.replaceChild(newtitleh2, oldtitleh4);
// console.log(getcardfooter);
//! Remove Element (self) ==> remove()
const getlis = document.querySelectorAll("li");
// console.log(getlis); //? Nodelist(6)
getlis[0].remove();
// console.log(getlis); //? Nodelist(6)
getlis[1].remove();
// console.log(getlis.length); //! 6
