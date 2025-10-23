const minnum = document.querySelector(".minnumber"),
  maxnum = document.querySelector(".maxnumber"),
  getgameform = document.getElementById("gameform"),
  getinput = document.querySelector("#guessnumber"),
  getbtn = document.getElementById("btn"),
  getmessage1 = document.querySelector(".message1"),
  getmessage2 = document.querySelector(".message2");

const min = 1,
  max = 10,
  winningnum = 5;

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener("click", function (e) {
  console.log("I am working");
  console.log(getinput.value);
  console.log(typeof getinput.value); // ? String

  //? Method 1
  //   let guess = Number(getinput.value);
  //? Method 2
  //   let guess = +getinput.value;
  // ? Method 3
  let guess = parseInt(getinput.value);
  console.log(guess);
  console.log(typeof guess);
  e.preventDefault();
});
