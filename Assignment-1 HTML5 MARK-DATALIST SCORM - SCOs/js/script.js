function login(){
	if(document.getElementById('username').value==="" ||document.getElementById('password').value===""){
		document.getElementById("error_message").style.display = "block";		
	}
	else{
		window.location.href = "ques1.html";
	}
}

function takeTest(){
	window.location.href = "ques1.html";	
}

function ques1Next(){
	sessionStorage.removeItem('quantCorrectAnswers');
	sessionStorage.removeItem('quantNotAnswered');
	if(document.getElementById('4').checked){
		sessionStorage.setItem('quantCorrectAnswers', '1');
  	}
  	else if(document.getElementById('3').checked || document.getElementById('2').checked
  		|| document.getElementById('1').checked) {
  	}
  	else{
		sessionStorage.setItem('quantNotAnswered', '1');
  		console.log('Not Answered');
  	}
	window.location.href = "ques2.html";	  	
}

function resetSelection(){
	sessionStorage.removeItem('quantCorrectAnswers');
	sessionStorage.removeItem('quantNotAnswered');
	var radio_buttons = document.getElementsByClassName('radioButton')
	for (var i = 0; i < radio_buttons.length; i++) {
    radio_buttons[i].checked = false;
	}
}

function ques2Next(){
	if(document.getElementById('6').checked) {
  		if(sessionStorage.getItem('quantCorrectAnswers') != null){
			sessionStorage.setItem('quantCorrectAnswers', '2');
  		}
  		else {
  			sessionStorage.setItem('quantCorrectAnswers', '1');
  		}	
  	}
  	else if(document.getElementById('5').checked || document.getElementById('7').checked
  		|| document.getElementById('8').checked) {
  	}
  	else{
  		if(sessionStorage.getItem('quantNotAnswered') != null){
			sessionStorage.setItem('quantNotAnswered', '2');
  		}
  		else sessionStorage.setItem('quantNotAnswered', '1');
  	}
  	window.location.href = "ques3.html";	  	
}

function mark1(id){
	document.getElementById('price').innerHTML='$'+document.getElementById(id).value;
}

function mark2(id){
	document.getElementById('company').innerHTML=document.getElementById(id).value;
}

function ques3Next(){
	sessionStorage.removeItem('englishCorrectAnswers');
	sessionStorage.removeItem('englishNotAnswered');
	if(document.getElementById('550').checked && document.getElementById('551').checked) {
  		sessionStorage.setItem('englishCorrectAnswers', '1');
  	}
  	else if( 
  		(document.getElementById('650').checked || 
  		 document.getElementById('550').checked ||
  		 document.getElementById('750').checked)
  		&& 
  		(document.getElementById('651').checked || 
  			document.getElementById('551').checked) || 
  			document.getElementById('751').checked)
  		console.log('Incorrect answer');
  	
  	else{
  		sessionStorage.setItem('englishNotAnswered', '1');
  		console.log('Not answered');
  	}
  	console.log('englishCorrectAnswers q3 '+sessionStorage.getItem('englishCorrectAnswers'));
  	console.log('englishNotAnswered q3 '+sessionStorage.getItem('englishNotAnswered'));
	window.location.href = "ques4.html";	  	
}

function ques4Next(){
	sessionStorage.removeItem('audioCorrectAnswers');
	sessionStorage.removeItem('audioNotAnswered');
	if(document.getElementById('q41').checked) {
  		sessionStorage.setItem('audioCorrectAnswers', '1');
  		console.log('correct answer q4');
  	}
  	else if(document.getElementById('q42').checked || 
  		 document.getElementById('q43').checked ||
  		 document.getElementById('q44').checked)
  
  		console.log('Incorrect answer');
  	
  	else{
  		sessionStorage.setItem('audioNotAnswered', '1');
  		console.log('Not Answered');
  	}
  	console.log('englishCorrectAnswers q4 '+sessionStorage.getItem('audioCorrectAnswers'));
  	console.log('englishNotAnswered q4 '+sessionStorage.getItem('audioNotAnswered'));
	window.location.href = "survey_page.html";	  	
}

function survey(){

	if(document.getElementById('30').value=="" ||
		document.getElementById('city').value=="" ||
		document.getElementById('rooms').value=="") {
		document.getElementById('missing').style.display="block"; 
  	}
  	else{
  		window.location.href = "score_card.html";
  	}
}

function skipSurvey(){
	console.log('inside surveySkip()');
	window.location.href = "score_card.html";
}

function findScore(){
	if(sessionStorage.getItem('quantNotAnswered') == null){
		document.getElementById('mathsAnswered').innerHTML='Number of Questions Answered: '+2;
	}
	else if(sessionStorage.getItem('quantNotAnswered') == "1"){
		document.getElementById('mathsAnswered').innerHTML='Number of Questions Answered: '+1;
	}
	else 	document.getElementById('mathsAnswered').innerHTML='Number of Questions Answered: '+0;

	if(sessionStorage.getItem('quantCorrectAnswers') == null){
		document.getElementById('mathsCorrectlyAnswered').innerHTML='Number of Questions Correct: '+0;
		document.getElementById('mathsScore').innerHTML='Score '+0;
	}
	else if(sessionStorage.getItem('quantCorrectAnswers') == "1"){
		document.getElementById('mathsCorrectlyAnswered').innerHTML='Number of Questions Correct: '+1;
		document.getElementById('mathsScore').innerHTML='Score '+50;
	}
	else{
		document.getElementById('mathsCorrectlyAnswered').innerHTML='Number of Questions Correct: '+2;
		document.getElementById('mathsScore').innerHTML='Score '+100;
	}

	if(sessionStorage.getItem('englishNotAnswered') == null){
		document.getElementById('readingAnswered').innerHTML='Number of Questions Answered: '+1;
	}
	else 	document.getElementById('readingAnswered').innerHTML='Number of Questions Answered: '+0;

	if(sessionStorage.getItem('englishCorrectAnswers') == null){
		document.getElementById('readingCorrect').innerHTML='Number of Questions Correct: '+0;
		document.getElementById('readingScore').innerHTML='Score '+0;
	}
	else{
		document.getElementById('readingCorrect').innerHTML='Number of Questions Correct: '+1;
		document.getElementById('readingScore').innerHTML='Score '+100;
	}

	if(sessionStorage.getItem('audioNotAnswered') == null){
		document.getElementById('audioAnswered').innerHTML='Number of Questions Answered: '+1;
	}
	else 	document.getElementById('audioAnswered').innerHTML='Number of Questions Answered: '+0;

	if(sessionStorage.getItem('audioCorrectAnswers') == null){
		document.getElementById('audioCorrectlyAnswered').innerHTML='Number of Questions Correct: '+0;
		document.getElementById('audioScore').innerHTML='Score '+0;
	}
	else{
		document.getElementById('audioCorrectlyAnswered').innerHTML='Number of Questions Correct: '+1;
		document.getElementById('audioScore').innerHTML='Score '+100;
	}

}

function finish(){
	window.location.href = "index.html";
}