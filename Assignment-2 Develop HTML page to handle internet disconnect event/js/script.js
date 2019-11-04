function displayConnectionStatus(event) {
	var status_placeholder = document.getElementById("status_placeholder");
	var message=""
	if (navigator.onLine){
		message = "Welcome back! You are connected to internet again.";		
	}
	else{
		message = "Oops! Internet disconnected. Please check your internet connection.";
		alert("Internet disconnected. Please check your internet connection.");
	}
	status_placeholder.innerHTML = message;
}

window.addEventListener('online',  displayConnectionStatus);
window.addEventListener('offline', displayConnectionStatus);