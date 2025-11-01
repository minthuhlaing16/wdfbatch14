	$(document).ready(function(){
			// Theme toggle for light mode and dark mode
			$("#themetoggle").click(function(){
				$("body").toggleClass('dark-mode');
				localStorage.setItem("theme",$("body").hasClass('dark-mode')? "dark" : "light")
			});
			// load theme from localStorage
			if(localStorage.getItem("theme") === "dark"){
				$("body").addClass('dark-mode');
			}

			const quizs = [
				{
					question: "What do you use a phone for?",
					options:["Cooking","Sleeping","Calling","Driving"],
					answer:"Calling"
				},
				{
					question: "Which one is the smart phone brand?",
					options:["Apple","Orange","Mango","Banana"],
					answer:"Apple"
				},
				{
					question: "Which app lets you make video call?",
					options:["Game","Music","Video","FaceTime"],
					answer:"FaceTime"
				}
			];
			let currentidx = 0;
			let currentscore = 0;
			function showquestion(){
				const currentquiz = quizs[currentidx];
				// console.log(currentquiz);	
				$("#question").text(currentquiz.question);
				$(".options").empty();

				currentquiz.options.forEach(option=>{
					$(".options").append(`<button type="button" class="optionbtn">${option}</button>`)
				})

				$(".nextbtn").hide();

				// Method 1 ==> event bubbling nae khaw nay tar
				// $(".optionbtn").click(function(){
				// 	console.log("hello world");
				// })	

				// Method 2 ==> event bubbling
				// $(".optionbtn").click(function(e){
				// 	console.log(e.target);
				// })

				// Method 3 ==> event bubbling
				// $(".optionbtn").click(function(){
				// 	console.log(this);
				// })
			}
			showquestion();

			// Event delegation
			$(".options").on("click",".optionbtn",function(e){
				// console.log(e.target);
				// console.log(this);
				// console.log(this.innerText);
				// console.log($(this));

				const selected = $(this).text();
				// console.log(selected);

				const correct = quizs[currentidx].answer;

				if(selected === correct){
					// console.log("yes");
					$(this).addClass("correct");
					currentscore++;
				}else{
					// console.log("no");
					$(this).addClass("wrong");
					$(`.optionbtn:contains(${correct})`).addClass('correct');
					console.log($(`.optionbtn:contains(${correct})`));
				}
				$(".optionbtn").attr("disabled", true);
				$(".nextbtn").show();
			})

			$(".nextbtn").click(function(){
				currentidx++;
				if(currentidx < quizs.length){
					showquestion();
				}else{
					showresult();
				}
			});
			function showresult(){
				// console.log("result.");
				$("#result").show();
				$("#quizcontainer").hide();
				$(".nextbtn").hide();
				$("#result").html(`
					<h3>Your Score: ${currentscore}/${quizs.length}</h3>
					<button type="button" id="restartbtn">Restart</button>
				`);
			}
			$("#result").on("click","#restartbtn",function(){
				// ? dr ka reload ma phit chin loa pay tar
				currentidx = 0;
				currentscore = 0;
				$("#result").hide();
				$("#quizcontainer").show();
				showquestion();

				// ? reload phit chin tal so yin
				// location.reload();
			});
		});





// click()
// toggleClass()
// hasClass()
// addClass()
// text()
// append()
// $("").on(event,selector,callback)
// show()
// attr("attribute",value)
// empty()
// html()
 

 // ? HTML mar ta khar hte shi nay yin event bubbling ==> javascript ka yout lar yin event delegation 