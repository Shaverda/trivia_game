//https://www.buzzfeed.com/psykt/will-you-survive-this-hard-harry-potter-trivia-qui-1ungl?utm_term=.jwL7e2pj2#.tiW05DzyD
//TELL PEOPLE WHAT ANSWER WAS CORRECT!!!


$(document).ready(function() {

	var questions = {
			1 : {
				"question" : "What's the name of Bellatrix's husband?",
				"answer_1" : "Albert Lestrange",
				"answer_2" : "Rolphius Lestrange",
				"answer_3" : "Adolph Lestrange", 
				"answer_4" : "Rodolphus Lestrange",
				"correct" : "Rodolphus Lestrange",
			}, 
			2 :  {
				"question" : "What's the name of Percy's wife?",
				"answer_1" : "Audrey",
				"answer_2" : "Lucy",
				"answer_3" : "Rosie", 
				"answer_4" : "Marjorie",
				"correct" : "Audrey"
			}, 
			3 :  {
				"question" : "Which of these is a type of Love Potion?",
				"answer_1" : "Felix Felicis",
				"answer_2" : "Amortentia",
				"answer_3" : "Polyjuice Potion",
				"answer_4" : "Veritaserum",
				"correct" : "Amortentia",
			}, 	
			4 :  {
				"question" : "What class did Neville end up teaching at Hogwarts?",
				"answer_1" : "Astronomy",
				"answer_2" : "Muggle Studies",
				"answer_3" : "Herbology",
				"answer_4" : "Charms",
				"correct" : "Herbology"
			},
			5 :  {
				"question" : "What's the name of Tonks and Lupin's son?",
				"answer_1" : "Theodore",
				"answer_2" : "Lyall",
				"answer_3" : "James",
				"answer_4" : "Edward",
				"correct" : "Edward"
			}, 
			6 :  {
				"question" : "Which of these are not one of Hagrid's many pets?",
				"answer_1" : "Grawp",
				"answer_2" : "Fluffy", 
				"answer_3" : "Aragog",
				"answer_4" : "Norberta",
				"correct" : "Grawp"
			}, 		
			7 :  {
				"question" : "What is the name of Fleur Delacour's sister?",
				"answer_1" :  "Victoire",
				"answer_2" : "Apolline",
				"answer_3" : "Dominque",
				"answer_4" : "Gabrielle",
				"correct" : "Gabrielle"
			}, 	
			8 :  {
				"question" : "Which of these is not a wizarding school?",
				"answer_1" :  "Durmstrang",
				"answer_2" : "Mahoutokoro",
				"answer_3" :  "Uagadou",
				"answer_4" : "Salvdovoretz",
				"correct" : "Salvdovoretz"
			}, 
			9 :  {
				"question" : "What's the name of Ron Weasley's great-aunt?",
				"answer_1" :  "Marge",
				"answer_2" : "Margot",
				"answer_3" :  "Muriel",
				"answer_4" : "Marjorie",
				"correct" : "Muriel"
			},
			10 :  {
				"question" : "Which was not one of Voldemort's Horcruxes?", 
				"answer_1" :  "Harry",
				"answer_2" : "Helga's diadem",
				"answer_3" :  "Nagini", 
				"answer_4" :  "Tom Riddle's diary",
				"correct" : "Helga's diadem"
			}				
		}
	var current_question = 1;	//stores what number question you're on
	var right_answers = 0;		//keeps track of # you've gotten right
	var wrong_answers = 0;		//keeps track of # you've gotten wrong
	var answer_chosen, obj, counter;

	$(".correct-gif").hide(); $(".incorrect-gif").hide();$(".win-gif").hide();	//resets page; this items will .show() later on certain states

	$(".begin-game").on("click", function(){
		$(".begin-game").remove()	
		counter = setup_question();		
	}) //button on click close

	function check_answer(counter){
		$(".answers").hide();	//hide other answers
		if (answer_chosen == obj["correct"]){ 	//checks to see if it matches correct answer in object
			$(".question-area").html("Correct!");	
			$(".correct-gif").show();
			$(".incorrect-gif").hide(); 
			right_answers++;			
		}
		else {		//enters if answer choice does not answer correct answer in object
			$(".question-area").html("Incorrect!");
			wrong_answers++;	
			$(".incorrect-gif").show(); 
		}
		clearInterval(counter);	//erases any time remaining from counter timeout on line 115ish
		$(".score-chart").hide();
		current_question++;	//enables you to move on to next question in trivia question call
		$(".time-remaining").hide();
		setTimeout(setup_question, 2000)	//sets a waiting before before calling next question
		$(".question-number").html("Question " + current_question + "/10");
		$(".scored-answers").html(right_answers + " question(s) correct out of " + (current_question -1)+ " question(s)")
	}

	function setup_question(){		//re-writes to the DOM based on object
		obj = questions[current_question]	
		if (current_question > 10){
			end_game();
		}
		else {
			$(".score-chart").show();		//these are necessary because this 
			$(".answers").show();			//function is called for every single question, 
			$(".correct-gif").hide();		//meaning I essentially have to reset screen 
			$(".incorrect-gif").hide();		//each time

			$(".question-area").html(obj["question"]);	//re-writes current question
			$(".answer-1").html(obj["answer_1"]);		//re-writes answers...
			$(".answer-2").html(obj["answer_2"]);
			$(".answer-3").html(obj["answer_3"]);
			$(".answer-4").html(obj["answer_4"]);

			var count = 30;				//user gets 30 seconds to guess
			counter = setInterval(timer, 1000);	//sets counter that counts down every second
			$(".time-remaining").show();		

			function timer(){		//function to count down
				count--;		//decrements count
				$(".time-remaining").html(count + " seconds left");	//re-writes how much time left
				 if (count <= 0){		//once user runs out of time
				 	clearInterval(counter);	//clear interval
				 	wrong_answers++;		//counted as wrong answers
				 	$(".question-area").html("You ran outta time! Next question!");
				 	$(".answers").hide();	//hides answer choices
				 	setTimeout(setup_question, 4000)	//gives a brief waiting time before next quesiton called
				 	current_question++;		//moves along to next question in object
				 	$(".time-remaining").hide();	//hides time left if run outta question
				}
			}
			return counter;
		} //else closing
	}
	function end_game(){
		clearInterval(counter)	//kills timer
		$(".time-remaining").hide();
		$(".question-area").html("You finished!");
		$(".gif-area").hide();
		$(".score-chart").show();
		$(".win-gif").show();
		$(".win-state").prepend("<h3> You did alright I guess... </h3>");	
	}

	$(".answers").on("click", function(){	//once an answer choice is chosen
		answer_chosen = this.textContent;
		check_answer(counter);
	})
})	//document ready close


