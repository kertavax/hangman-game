"use strict";

$(document).ready(function() {
	var Street = function(name) {
		this.name = name;
		this.name_length = this.name.length;
	};
	var User_guess = function(input) {
		this.guess = new RegExp(input + "+", "gi");
	}

	var mccaul = new Street("McCaul");
	var user1 = new User_guess("c");

	var name_as_underscores = "";


	// turn Street.name letters to underscores
	$(".correct_letters").children("h2")
		.text(function() {
			for (var i = 0; i < mccaul.name_length; i++) {
				name_as_underscores += "_";
			};
			return name_as_underscores;
		});

	// Check if User.guess is found within Street.name
	if (mccaul.name.match(user1.guess) !== null) {
		console.log("CORRECT guess!");
	}	else {
		console.log("INCORRECT guess!")
	}
	
	// This returns an array
	// => ["cC", index: 1, input: "McCaul"]
	console.log(user1.guess.exec(mccaul.name));

})











