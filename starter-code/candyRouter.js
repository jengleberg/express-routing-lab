var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

//What would need to go into candies
var candies = [
			{"id":1,"name":"Chewing Gum","color":"Red"},
			{"id":2,"name":"Pez","color":"Green"},
			{"id":3,"name":"Marshmallow","color":"Pink"},
			{"id":4,"name":"Candy Stick","color":"Blue"}
			];


	//in order to pass our first test??
	// What would go here? 
	// Hint: we want all candies in JSON format
router.get('/', function(req,res) {
	console.log("These are my candies");
	res.json(candies);
});

// Fill out the rest of the routes here

// Show
router.get('/:id', function(req, res) {
	var candyID = req.params.id;
	res.json(candies[candyID -1]);
});

// Create
router.post('/', function(req, res) {
	res.json(req.body);
	candies.push(req.body); //Pushes the new candy to the array
});

// Update
router.put('/:id', function(req, res) {
	var candyID = req.params.id;
	for (var i = 0; i < candies.length; i++) {
		if (candyID == candies[i].id) {
			candies[i].name = req.body.name;
			candies[i].color = req.body.color;
		}
	}

	console.log("candy changed");
});

// Delete
router.delete('/:id', function(req, res) {
	var deleteCandy = req.params.id;
	for (var i = 0; i < candies.length; i++) {
		if (deleteCandy == candies[i].id) {
			candies.pop(candies[i]); // Removes the candy from the array
		}
		
	}
	console.log("candy deleted");
});



module.exports = router;