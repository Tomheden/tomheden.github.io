var _LIST = [
	"¡Bienvenido!",
	"Welcome!",
	"Benvenuto!",
	"Bienvenue!"
];

// Current sentence being processed
var _WORD = 0;

// Character number of the current sentence being processed
var _CURRENT_LETTER = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
	// Get substring with 1 characater added
	var text =  _LIST[_WORD].substring(0, _CURRENT_LETTER + 1);
	_ELEMENT.innerHTML = text;
	_CURRENT_LETTER++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _LIST[_WORD]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _LIST[_WORD].substring(0, _CURRENT_LETTER - 1);
	_ELEMENT.innerHTML = text;
	_CURRENT_LETTER--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_WORD == (_LIST.length - 1))
			_WORD = 0;
		else
			_WORD++;

		_CURRENT_LETTER = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);