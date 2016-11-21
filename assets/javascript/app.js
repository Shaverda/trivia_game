//https://www.buzzfeed.com/psykt/will-you-survive-this-hard-harry-potter-trivia-qui-1ungl?utm_term=.jwL7e2pj2#.tiW05DzyD

var questions = {
		1 : {
			"question" : "What's the name of Ballatrix's husband?",
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
var current_question = 1;
var right_answers = 0;
var wrong_answers = 0;

function trivia_question(){
	var obj = questions[current_question]
	
	$(".score-chart").show();
	$(".answers").show();
	$(".correct-gif").hide();
	$(".incorrect-gif").hide();

	$(".question-area").html(obj["question"]);
	$(".answer-1").html(obj["answer_1"]);
	$(".answer-2").html(obj["answer_2"]);
	$(".answer-3").html(obj["answer_3"]);
	$(".answer-4").html(obj["answer_4"]);

	var count = 30;
	var counter = setInterval(timer, 1000);
	$(".time-remaining").show();

	function timer(){
		count--;
		$(".time-remaining").html(count);
		 if (count <= 0){
		 	clearInterval(counter);
		 	wrong_answers++;
		 	$(".question-area").html("You ran outta time! Next question!");
		 	$(".answers").hide();
		 	setTimeout(trivia_question, 4000)
		 	current_question++;
		 	$(".time-remaining").hide();
		 	console.log(current_question + " 118");
		}
	}
	
	$(".answers").on("click", function(){
		$(".answers").hide();
		if (this.textContent == obj["correct"]){ 
			$(".question-area").html("Correct!");
			$(".correct-gif").show();
			$(".incorrect-gif").hide(); 
			right_answers++;
			console.log(current_question + " 129");
			
		}
		else {
			console.log("ugh");
			$(".question-area").html("Incorrect!");
			wrong_answers++;
			$(".incorrect-gif").show(); 
			console.log(current_question + " 137");
		}
		$(".score-chart").hide();
		current_question++;
		$(".time-remaining").hide();
		setTimeout(trivia_question, 4000)
		clearInterval(counter);
		$(".question-number").html("Question " + current_question + "/10");
		$(".scored-answers").html(right_answers + " question(s) correct out of " + (current_question -1)+ " question(s) so far.")
		console.log(current_question + " 146");
	})
	
}

$(document).ready(function() {
	$(".correct-gif").hide();
	$(".incorrect-gif").hide();							
	$(".begin-game").on("click", function(){
		console.log("clicked button");
		$(".begin-game").remove()
		trivia_question();		//fix this so you don't directly have to call question #
	}) //button on click close

})	//document ready close



//replace html for individual question
// have each answer be a choice
// have a counter and time remaining 

//on click or on timer ended, 
//whatever comes first, show win or lose based on result selected

//repeat!!!
//maybe have object of objects w/ answer choices and 
//functions to show correct answer questions with cool gif o whatever?




//var question_1 = ["What's the name of Ballatrix's husband?", "Albert Lestrange", "Rolphius Lestrange", "Adolph Lestrange", "Rodolphus Lestrange", 4];
//var question_2 = ["What's the name of Percy's wife?", "Audrey", "Lucy", "Rosie", "Marjorie", 1];
//var question_3 = ["Which of these is a type of Love Potion?", "Felix Felicis", "Amortentia", "Polyjuice Potion", "Veritaserum", 2];
//var question_4 = ["What class did Neville end up teaching at Hogwarts?", "Astronomy", "Muggle Studies", "Herbology", "Charms", 3];
//var question_5 = ["What's the name of Tonks and Lupin's son?", "Theodore", "Lyall", "James", "Edward", 4];
//var question_6 = ["Which of these are not one of Hagrid's many pets?", "Grawp", "Fluffy", "Aragog", "Norberta", 1];
//var question_7 = ["What is the name of Fleur Delacour's sister?", "Victoire", "Apolline", "Dominque", "Gabrielle", 4];
//var question_8 = ["Which of these is not a wizarding school?", "Durmstrang", "Mahoutokoro", "Uagadou", "Salvdovoretz", 4];
//var question_9 = ["What's the name of Ron Weasley's great-aunt?", "Marge", "Margot", "Muriel", "Marjorie", 3];
//var question_10 = ["Which was not one of Voldemort's Horcruxes?", "Harry", "Helga's diadem", "Nagini", "Tom Riddle's diary", 2];