var passwordValidate = false;
var passwordMatch = false;
var emailValidate = false;

function displayHintBox(){
	document.getElementById("hintBox").style.display = "block";
	var password = document.getElementById('password').value;
	var upperCase = (/[A-Z]/.test(password)) ? toGreen('upperCase') : toRed("upperCase");
	var lowerCase = (/[a-z]/.test(password)) ? toGreen('lowerCase') : toRed('lowerCase');
	var oneNumber = (/\d/.test(password)) ? toGreen('oneNumber') : toRed('oneNumber');
	var range = (password.length >7 && password.length<21) ? toGreen('range') : toRed('range');
	var specicalChar = (/(?=.*[!#\$%])/g.test(password)) ? toGreen('specicalChar') : toRed('specicalChar');
	var alphanumeric = (/(?=(.*[a-zA-Z0-9].*){4,})/g.test(password)) ? toGreen('alphanumeric') : toRed('alphanumeric');

	passwordValidate = (password && upperCase && lowerCase && oneNumber && range && specicalChar && alphanumeric) ? true : false;
	
	function toRed(elem){
		document.getElementById(elem).style.color='red';
		return false;
	}
	function toGreen(elem){
		document.getElementById(elem).style.color='green';
		return true;
	}
}
function removeHintBox(){
	document.getElementById("hintBox").style.display = "none";
	matchPassword();
}

function matchPassword(){
	if(document.getElementById('password').value === document.getElementById('verifyPassword').value){
		document.getElementById("password_error").style.display = "none";
		passwordMatch=true;
	}
	else{
		document.getElementById("password_error").style.display = "block";
		passwordMatch=false;
	}
}

function matchEmail(){
	if(document.getElementById('email').value === document.getElementById('verifyEmail').value){
		document.getElementById("email_error").style.display = "none";	
		emailValidate=true;
	}
	else{
		document.getElementById("email_error").style.display = "block";
		emailValidate=false;
	}
}

function validateForm(form)
{	
	re = /^\w+$/;
	if(!re.test(form.userID.value)) {
		alert("Error: User ID must contain only letters, numbers and underscores!");
		form.username.focus();
		return false;
	}
	if(!passwordValidate){	
		form.password.focus();
		alert("Please enter the password in given format.");
		return false;
	}
	if(!emailValidate){	
		form.verifyEmail.focus();
		alert("Please enter the same email address.");
		return false;
	}
	if(!passwordMatch){	
		form.verifyPassword.focus();
		alert("Please enter the same password.");
		return false;
	}	
	alert("Registered successfully!");
	return true;
}

function reset(){
	document.getElementById("myForm").reset();
}
