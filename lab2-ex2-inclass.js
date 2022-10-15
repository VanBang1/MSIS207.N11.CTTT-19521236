var today = new Date();
var day = today.getDay();
var daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var hour = today.getHours();
var min = today.getMinutes();

var suffix = (hour >= 12)? " PM" : " AM";
hour = (hour >= 12)? hour - 12 : hour;

if (hour === "0" && suffix === " PM"){
  if(min === "0" && sec === "0") {
    hour = 12;
    suffix = " Noon";
  }
} 
else if (hour === "0" && suffix === " AM") {
  if(min === "0" && sec === "0") {
    hour = 12;
    suffix = " Midnight";
  }
}

var todayHTML = document.getElementById("todayHTML");
var timeHTML = document.getElementById("timeHTML");

todayHTML.innerHTML = "Today is " + daylist[day];
timeHTML.innerHTML = "Current time is :" + hour + suffix + ":" + min;

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your value";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});
//---------------4--------------
//First create a list of all bold items 
var bold_Items;
window.onload = getBold_items();
 
// Collect all <strong> tags
function getBold_items() 
{
  bold_Items = document.getElementsByTagName('strong'); 
}
// iterate all bold tags and change color  
function highlight() 
{
   for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "green";
    }
}

// -------------------5-----------------
function return_normal()
{
  for (var i=0; i<bold_Items.length; i++) 
  {
       bold_Items[i].style.color = "black";
  }
}
//---------------------6-----------
function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + " & Height: " + h + "</h1>";
}