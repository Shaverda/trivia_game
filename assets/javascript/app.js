//https://www.buzzfeed.com/psykt/will-you-survive-this-hard-harry-potter-trivia-qui-1ungl?utm_term=.jwL7e2pj2#.tiW05DzyD
var question_1 = ["What's the name of Ballatrix's husband?", "Albert Lestrange", "Rolphius Lestrange", "Adolph Lestrange", "Rodolphus Lestrange", 4];
var question_2 = ["What's the name of Percy's wife?", "Audrey", "Lucy", "Rosie", "Marjorie", 1];
var question_3 = ["Which of these is a type of Love Potion?", "Felix Felicis", "Amortentia", "Polyjuice Potion", "Veritaserum", 2];
var question_4 = ["What class did Neville end up teaching at Hogwarts?", "Astronomy", "Muggle Studies", "Herbology", "Charms", 3];
var question_5 = ["What's the name of Tonks and Lupin's son?", "Theodore", "Lyall", "James", "Edward", 4];
var question_6 = ["Which of these are not one of Hagrid's many pets?", "Grawp", "Fluffy", "Aragog", "Norberta", 1];
var question_7 = ["What is the name of Fleur Delacour's sister?", "Victoire", "Apolline", "Dominque", "Gabrielle", 4];
var question_8 = ["Which of these is not a wizarding school?", "Durmstrang", "Mahoutokoro", "Uagadou", "Salvdovoretz", 4];
var question_9 = ["What's the name of Ron Weasley's great-aunt?", "Marge", "Margot", "Muriel", "Marjorie", 3];
var question_10 = ["Which was not one of Voldemort's Horcruxes?", "Harry", "Helga's diadem", "Nagini", "Tom Riddle's diary", 2];

function outta_time(){
	console.log("lol u ran outta time");
}

function trivia_question(question_array){
	var timer = 0;
	setTimeout(outta_time, 3 * 1000);
	$(".begin-game").remove();
	$(".question-area").html("<h3> " + question_array[0] + "</h3>");
	$(".answer-1").html("<h4> " + question_array[1] + "</h4>");
	$(".answer-2").html("<h4> " + question_array[2] + "</h4>");
	$(".answer-3").html("<h4> " + question_array[3] + "</h4>");
	$(".answer-4").html("<h4> " + question_array[4] + "</h4>");



}

$(document).ready(function() {						
	$(".begin-game").on("click", function(){
		console.log("clicked button");
		for (var i = 1; i < 11; i++){
			trivia_question(question_1);		//fix this so you don't directly have to call question #
		}	
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

        // /   <p class="time-remaining"> </p>
        //    <p class="question-area"> </p>
        //    <p class="answer-1"></p>
        //    <p class="answer-2"></p>
        //    <p class="answer-3"></p>
        //    <p class="answer-4"></p>