$(document).ready(function(){
console.log("ready");

var i =0;

var numCorrect = 0;
var userAnswers = new Array();  

var questions =[{
    question: "1. What dog breed is the most difficult to train?", 
    choices: ["Papillion", "Shetland Sheepdog", "Afghan", "Rottweiller"],
    correctAnswer: "Afghan"
}, {
    question:"2. What breed of dog needs the most exercise?", 
    choices: ["Chihuahau", "Shetland Sheepdog", "Greyhound", "Pug"],
    correctAnswer: "Shetland Sheepdog"
}, {
    question:"3. Which dog has the best sense of smell?", 
    choices:["Golden Retriever", "Saint Bernhard", "Boxer", "Beagle"],
    correctAnswer: "Beagle"
}];

console.log(questions);



var answer="";
var submitBtn = $('.submitBtn');
    
submitBtn.hide();

function generateQuestions(){

  if(i < questions.length){
        submitBtn.css("display","inline");
    $('#questions').fadeIn('slow');
    var txt ="<h3>"+ questions[i].question + "<h3>";
    
    $(questions[i].choices).each(function (idx, value) {
        console.log(value);
        txt += "<input type='radio' name='choice' value='" + value + "' />" + value;
    });//end
    
    answer = questions[i].correctAnswer;
    $('.quiz').html(txt);

    i++;
    
  }else{
   var totalScore = 'Congratulations! You have collected '+ numCorrect +' bones!'
   $('.quiz').remove();
   $('#status').html(totalScore);
  submitBtn.remove();
      //Remove submit button
      
}
};//end generateQuestions

$('.getStarted').on('click', function () {
    $(this).hide();
    generateQuestions();
});


$('.submitBtn').on('click', function (e) {
    e.stopPropagation();
    console.log($('.quiz input:checked').val());
    evaluateEntry($('.quiz input:checked').val());
    generateQuestions();
});
    
$("body").keypress(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    $('.submitBtn').click();
    }
});


function evaluateEntry(val){  //function to evaluate the selection clicked
    if(val == answer){ // the answer is correct
        $('#status').html('<p>Correct!</p>');
         $('#tally').append('<img id="bone" img src="images/bone.png"/>');  
        numCorrect++;
    }else{                //  the answer is incorrect       
        $('#status').html('<p><span class="doggoneit">DOGGONE-IT!</span> The correct answer is '  + answer + '</p>');   
    } 
}

});//end ready