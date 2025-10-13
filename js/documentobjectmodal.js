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
document.getElementById("tasktitle").textContent = "My Job";
document.getElementById("tasktitle").innerText = "My Task";
document.getElementById("tasktitle").innerHTML =
  "<span style='color:steelblue;font-size:25px;text-decoration:underline;'>My Todo</span>";
