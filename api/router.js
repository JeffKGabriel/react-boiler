var express = require('express');


//mongoose.connect('mongodb://localhost:27017/db');

var Bear = require('./models/bears');


var router = express.Router();

router.use(function(req, res, next) {
	// do logging
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
  //res.setHeader('Access-Control-Allow-Origin', 'http://104.131.167.44');
	//console.log('Something is happening.');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});


router.route('/Bears')

	.post(function(req, res) {

		var bear = new Bear();

    bear.name = req.body.name;

		bear.save(function(err) {
			if (err)
				res.send(err);
			res.json({ message: 'New Bear: '+ bear.name +' Added!' });
		});


	})

	.get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err)
				res.send(err);
			res.json(bears);
		});
	});





module.exports = router;
