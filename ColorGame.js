var numSquares = 6;
// This is an empty array of colors
var colors = [];
var pickedColor;

// Below are selective methods to select specific elements
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// The init function will run when the page loads
init();

function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
};

// This function will track the easy and hard mode operations
// This function allows to add more modes by changing only this code
function setUpModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
	    });
	}
};

function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {

		// add click listener to the squares
		squares[i].addEventListener("click", function() 
		{
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			
			// compare color to pickedColor and return the message 
			if(clickedColor === pickedColor) 
			{
				message.textContent = "Correct";
				resetButton.textContent = "Play Again?";

				changeColors(pickedColor);

				h1.style.backgroundColor = clickedColor;
			} 
			else 
			{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}; 

function reset() {
	colors = generateRandomColor(numSquares);

	//pick a new random color from array
	pickedColor = pickColor();

	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";

	//change colors of squares according to the mumber of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) 
		{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} 
		else 
		{
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
};


resetButton.addEventListener("click", function() {
	reset();
})


// This function will change the colors of all squares to the right color
function changeColors(color) {
	// loop through all squares 
	for(var i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

// This function will return one of the RGB colors from all possible RGB colors
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	// backticks will be used to include variables with a dollar sign in the string
	return `rgb(${r}, ${g}, ${b})`;
};

// This will generate random colors according to the number of squares 
function generateRandomColor(num) {
	//make an empty array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++)
	{
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
};