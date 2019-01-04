var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var button = document.getElementById("random")


function rcolor() {
	var color = '#'+Math.random().toString(16).slice(-6);
	return color;

}

// Select a random number between 0 and 359, |0 cuts the decimals
function getRandom() {
	return Math.random()*360|0
}

function numbers() {
	var rcolor1 = rcolor();
	var rcolor2 = rcolor();
	// var deg = getRandom();
	// console.log(deg +"deg, " + rcolor1 + ", " + rcolor2);
	body.style.background = 
	"linear-gradient(to right, " 
	// + deg
	// +"deg, "
	+ rcolor1
	+ ", " 
	+ rcolor2 
	+ ")";
		css.textContent = "linear-gradient(" 
	 	+ rcolor1 
	 	+ ", " 
	 	+ rcolor2 
	 	+ ");";
}

button.addEventListener("click", numbers);



function back() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

}

back();

function display() {
	css.textContent = "linear-gradient(to right, " 
	 	+ color1.value 
	 	+ ", " 
	 	+ color2.value 
	 	+ ")" + ";";

}
display();

function changecolour() {
		body.style.background = 
	 	"linear-gradient(to right, " 
	 	+ color1.value 
	 	+ ", " 
	 	+ color2.value 
	 	+ ")";
	 	css.textContent = body.style.background + ";";
	 }

color1.addEventListener("input", changecolour);

color2.addEventListener("input", changecolour);

