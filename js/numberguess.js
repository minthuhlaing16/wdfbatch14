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

let gameleft = 3;

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener("click", function (e) {
  // console.log("I am working");
  // console.log(getinput.value);
  // console.log(typeof getinput.value); // ? String

  //? Method 1
  //   let guess = Number(getinput.value);
  //? Method 2
  //   let guess = +getinput.value;
  // ? Method 3
  let guess = parseInt(getinput.value);
  // console.log(guess);
  // console.log(typeof guess);

  if (guess < min || guess > max || isNaN(guess)) {
    // console.log(`Please enter a number between ${min} to ${max}.`);
    // getmessage2.textContent = `Please enter a number between ${min} to ${max}..`;
    setmessage2(`Please enter a number between ${min} to ${max}..`, "violet");
  }

  if (guess === winningnum) {
    //? Game Over ==> WON
    // console.log("you won.");
    // todo ==> disabled getinput
    getinput.disabled = true;
    // todo ==> border color to green
    getinput.style.borderColor = "green";
    // todo ==> message1 alert
    // todo ==> gameover, color green
    // getmessage1.textContent = `${winningnum} is correct. You Won.`;
    // getmessage1.style.color = "lightgreen";
    setmessage1(`${winningnum} is correct. You Won.`, "lightgreen");
    // todo ==> play again
    getbtn.value = "Play Again!";
  } else {
    // ? Method 1
    // gameleft--;
    // ? Method 2
    gameleft -= 1;

    console.log(gameleft);

    if (gameleft === 0) {
      //! Game Over ==> LOSE
      // todo ==> disabled getinput
      getinput.disabled = true;
      // todo ==> getinput border color red
      getinput.style.borderColor = "red";
      getinput.style.borderWidth = "2px";
      getinput.style.borderStyle = "dashed";
      // todo ==> message 1 alert
      // todo ==> gameover, yellow color
      // getmessage1.textContent = `Game Over,The correct number is ${winningnum}.`;
      // getmessage1.style.color = "yellow";
      setmessage1(`Game Over,The correct number is ${winningnum}.`, "yellow");
      // todo ==> Play Again..
      getbtn.value = "Play Again!";
    } else {
      // ! Continue GAME
      // todo ==> getinput border color to red
      getinput.style.borderColor = "red";
      // todo ==> message1 alert
      // todo ==> not correct , left
      // getmessage1.innerText = `${guess} is not correct. Game left: ${gameleft}.`;
      // getmessage1.style.color = "skyblue";
      setmessage1(`${guess} is not correct. Game left: ${gameleft}.`, "skyblue");
      // todo ==> clear getinput old value
      getinput.value = "";
      // todo ==> autofocus
      getinput.focus();
    }
  }
  e.preventDefault();
});

function setmessage1(msg, color) {
  getmessage1.textContent = msg;
  getmessage1.style.color = color;
}

function setmessage2(msg, color) {
  getmessage2.textContent = msg;
  getmessage2.style.color = color;

  setTimeout(() => {
    getmessage2.textContent = "";
  }, 2000);
}
