"use strict";

$(document).ready(function() {
	var Street = function(name) {
		this.name = name;
		this.name_length = this.name.length;
	};

	var mccaul = new Street("McCaul");
	var user_guess = "M";

	$(".correct_letters").children("h2")
		.text(function() {
			var name_as_underscores = "";
			for (var i = 0; i < mccaul.name_length; i++) {
				name_as_underscores += "_ ";
			};
			return name_as_underscores;
		});

	console.log(mccaul.name.search(user_guess));

})