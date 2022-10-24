var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "1":
	var sound1 = new Audio("sound_intrusment/tom-1.mp3");
	sound1.play();
	break;

	case "2":
	var sound2 = new Audio("sound_intrusment/tom-2.mp3");
	sound2.play();
	break;

	case "3":
	var sound3 = new Audio('sound_intrusment/tom-3.mp3');
	sound3.play();
	break;

	case "4":
	var sound4 = new Audio('sound_intrusment/tom-4.mp3');
	sound4.play();
	break;

	case "5":
	var sound5 = new Audio('sound_intrusment/snare.mp3');
	sound5.play();
	break;

	case "6":
	var sound6 = new Audio('sound_intrusment/crash.mp3');
	sound6.play();
	break;

	case "7":
	var sound7 = new Audio('sound_intrusment/kick-bass.mp3');
	sound7.play();
	break;

	default: console.log(key);
}
}
