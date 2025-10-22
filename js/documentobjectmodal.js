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
//   console.log(liitem);
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
// console.warn(chl);
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
// getlis[0].remove();
// console.log(getlis); //? Nodelist(6)
// getlis[1].remove();
// console.log(getlis.length); //! 6
// * Remove child element, removeChild()
const getfirstul = document.querySelector("ul");
// console.log(getfirstul);
// getfirstul.remove(); // ? ul ta khu lone del tar
// console.log(getfirstul.children); // ? HTMLCollection(6)
// console.log(getfirstul.children[0]); // ? first li ya mal
// getfirstul.removeChild(getfirstul.children[0]);
// console.log(getfirstul.children); // ? HTMLCollection(5)
// todo ==> Attribute
const firstli = document.querySelector("li");
// console.log(firstli);
const firstchild = firstli.children[0];
// console.log(firstchild);
// console.log(firstchild.id);
// console.log(firstchild.getAttribute("id"));
// console.log(firstchild.href); //! http://127.0.0.1:5500/l52documentobjectmodal.html#
// console.log(firstchild.getAttribute("href")); //? #
// console.log(firstchild.title);
// console.log(firstchild.getAttribute("title"));
// console.log(firstchild.alt); //! undefined
// console.log(firstchild.getAttribute("alt")); // ? iamalt
let hasatt = firstchild.hasAttribute("href");
// console.log(hasatt); //? true ==> boolean pay mal
hasatt = firstchild.hasAttribute("hay");
// console.log(hasatt); // ! false ==> hay so tat att ma shi loa
//! className Vs classList
// firstchild.className = "delete-item delete-myself";
// firstchild.className = "delete-item delete-ourself";
// console.log(firstchild);
// console.log(firstchild.classList);
// console.log(firstchild.classList[0]); // ? delete-item
firstchild.classList.add("delete-herself", "delete-ourselves");
firstchild.classList.remove("delete-ourselves"); //! multi del loa ya tal
// console.log(firstchild);
if (firstchild.className === "delete-item delete-herself") {
  // console.log("yes"); // ? yes ==> note: className ta htet hte tuu mha ya mar space taung char loa ma ya buu
} else {
  // console.log("No");
}

// ! classList.contains()
if (firstchild.classList.contains("delete-herself")) {
  // console.log("yes"); //? contains mar s par mal
} else {
  // console.log("no");
}

// ? addEventListener(eventtype,callbackfunction);

const clearbtn = document.querySelector(".clear-tasks");

// todo Method 1
// clearbtn.addEventListener("click", function (e) {
//   // console.log("hello I am add event listener.");
//   // console.log(e); //? PointerEvent
//   // console.log(e.target); // ? <a href="#" id="clearall" class="clear-tasks">Clear Tasks</a>
//   // console.log(e.target.id); // ? clearall
//   // console.log(e.target.className); //? clear-tasks
//   // console.log(e.target.classList); //? DOMTokenList ['clear-tasks', value: 'clear-tasks']
//   // console.log(e.target.classList[0]); //? clear-tasks
//   // console.log(this); //! Event pay sa yar ma lol
//   // console.log(this.id); // ? clearall
//   // console.log(this.className); //? clear-tasks
//   // console.log(this.classList); //? DOMTokenList
//   // console.log(this.classList.value); //? clear-tasks
//   // e.preventDefault(); //! kill link
// });

// todo Method 2
// clearbtn.addEventListener("click", myclick);

function myclick(e) {
  // console.log("hello my name is my click...");
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.textContent);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // console.log(e.target.classList[0]);
  // console.log(e.target.classList.value);
  // console.log(this);
  // console.log(this.id);
  // console.log(this.textContent);
  // console.log(this.className);
  // console.log(this.classList);
  // console.log(this.classList.value);
  // console.log(this.classList[0]);
  // e.target.textContent = "Finish";
  // this.textContent = "Done";
  // todo Coordinate Event ==> clientX , clientY
  // console.log(e);
  // const clientx = e.clientX;
  // const clienty = e.clientY;
  // console.log(clientx, clienty);
  // todo offsetX , offsetY
  const offx = e.offsetX;
  const offy = e.offsetY;
  console.log(`offsetX: ${offx}, offsetY: ${offy}`);
}

// ! Example for clientX and clientY on mousemove event
// clearbtn.addEventListener("mousemove", showCoordinate);

// function showCoordinate(e) {
//   // let clientx = e.clientX;
//   // let clienty = e.clientY;
//   // console.log(`ClientX: ${clientx} , ClientY: ${clienty}`);
//   //? offsetX and offsetY
//   const offx = e.offsetX;
//   const offy = e.offsetY;
//   console.log(`offsetX: ${offx}, offsetY: ${offy}`);
// }

// todo Mouse Event (Pointer Event) ["click","dblclick","mousedown","mouseup","mousemove"]

// const clbtn = document.querySelector(".clear-tasks");

// ? click,dblclick,mousedown,mouseup,mousemove

// clbtn.addEventListener("mousemove", mouseeventtype);

function mouseeventtype(e) {
  e.preventDefault();
  console.log(`Event Type: ${e.type}`);
}

// ? mouseenter event
const getcard = document.querySelector(".card");

// getcard.addEventListener("mouseenter", mouseeventtype);

//? mouseleave event
// getcard.addEventListener("mouseleave", mouseeventtype);

//? mousemove event
// getcard.addEventListener("mousemove", mouseeventtype);

const gettasktitle = document.querySelector("#tasktitle");
//? mouseover event(element to element)
// getcard.addEventListener("mousemove", function (e) {
//   gettasktitle.textContent = `MouseX: ${e.offsetX} , MouseY: ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},.6)`;
//   document.body.style.transition = `all 1s linear`;
// });

//todo submit ==> Note: form ko listen ka tal

// const getbtn = document.querySelector(".btn");

// getbtn.addEventListener("click", function (e) {
//   console.log("sub is working...");
//   e.preventDefault();
// });

// const getform = document.querySelector(".form");
// getform.addEventListener("submit", function (e) {
//   console.log("Hello I am submit form...");
//   console.log(`EventType: ${e.type}`);
//   e.preventDefault();
// });

// todo Input Event (keyboard event) ==> keydown,keyup,keypress
const getinput = document.querySelector("#task");

function inputeventtype(e) {
  console.log(e.type);
  console.log(e.target);
  // console.log(e.target.value);
  // console.log(this.value);
  console.log(getinput.value);
  console.log(this);
}
// * keydown event
// getinput.addEventListener("keydown", inputeventtype);

// * keyup event
// getinput.addEventListener("keyup", inputeventtype);

// * keypress event and keydown are the same
// getinput.addEventListener("keypress", inputeventtype);

//* input event
// getinput.addEventListener("input", inputeventtype);

//* focus event
// getinput.addEventListener("focus", inputeventtype);

//* blur event
// getinput.addEventListener("blur", inputeventtype);

//* copy event (ctrl+c/rightclick copy)
// getinput.addEventListener("copy", inputeventtype);

//* cut event (ctrl+x/rightclick cut)
// getinput.addEventListener("cut", inputeventtype);

//* paste (ctrl+v/rightclick paste)
// getinput.addEventListener("paste", inputeventtype);

// ? Event Bubbling ==> card title so card title out mhar shi ta mya element a kone nate paw mal
// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("I am card title");
// });

// document.querySelector(".card-header").addEventListener("click", () => {
//   console.log("I am card header");
// });

// document.querySelector(".card-footer").addEventListener("click", () => {
//   console.log("i am card footer");
// });

// document.querySelector(".card").addEventListener("click", () => {
//   console.log("I am card..");
// });

// ? Event Delegation
const getdeleteitem = document.querySelector(".delete-item");
// console.log(getdeleteitem);

// getdeleteitem.addEventListener("click", function (e) {
//   console.log(e.target); //! e.target ka i tag ko ya tal
//   console.log(this); //! this ka a tag ko ya tal
// });

// getdeleteitem.addEventListener("click", (e) => {
//   console.log(e.target); //! show i tag
//   console.log(this); //! show window object cuz arrow function
// });

// todo ==> Example of event delegation
document.body.addEventListener("click", eventdelegation);

function eventdelegation(e) {
  // console.log(e.target);
  // console.log(e.target.className);

  //? Method 1
  // if (e.target.className === "fa-solid fa-trash") {
  //   console.log("I am trash");
  // }

  //? Method 2
  if (e.target.classList.contains("fa-solid", "fa-trash")) {
    console.log("I am working.. I am a motherfucking trash...");
  }

  if (e.target.className === "list-group-item") {
    console.log("I am list items");
  }

  if (e.target.classList.contains("card-title")) {
    console.log("Card title motherfucker");
  }

  if (e.target.parentElement.className === "delete-item") {
    console.log("I am a tag");
  }

  if (e.target.parentElement.classList.contains("delete-item", "delete-herself")) {
    // console.log("I am also a tag.");
    e.target.parentElement.parentElement.remove();
  }
}

// todo Form Datas to LocalStorage
document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault();
  const getnewtask = document.getElementById("task").value;
  // console.log(getnewtask);

  let alltasks;

  if (localStorage.getItem("mytasks") === null) {
    alltasks = [];
  } else {
    alltasks = JSON.parse(localStorage.getItem("mytasks"));
    console.log(alltasks);
    console.log(typeof alltasks);
  }
  alltasks.push(getnewtask);
  localStorage.setItem("mytasks", JSON.stringify(alltasks));
  // localStorage.clear();
});

console.log(localStorage.getItem("mytasks"));
console.log(typeof localStorage.getItem("mytasks"));

console.log(JSON.parse(localStorage.getItem("mytasks")));
console.log(typeof JSON.parse(localStorage.getItem("mytasks")));

const getmytasks = JSON.parse(localStorage.getItem("mytasks"));

getmytasks.forEach((getmytask) => {
  console.log(getmytask);
});

//! JSON Object

/* 
todo ==> 1. input hte ka kaung ko first json format change LS hte htae
todo ==> 2. LS hte ka kaung ko pyan khaw ka mal String nae ya lar tat kaung ko array pyan pyaung ya lar tat array ko push nae have to eat ko htae JSON format pyan pyaung pee mha LS hte twr tane
*/
