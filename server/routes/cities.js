const express = require('express')
const router = express.Router()
const cityModel = require('../model/cityModel')

//test route
router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' })
})

//post cities 
router.post('/', (req, res) => {
    const newCity = new cityModel({
        name: req.body.name,
        country: req.body.country,
        image: req.body.image
    })

    cityModel.findOne({ name: newCity.name })
        .then(city => {
            if (city) res.status(500).send('This city already exist')
        })

    newCity.save()
        .then(city => {
            res.send(city)
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
});

//get all cities*
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});


//get one city
router.get('/:name',
	(req, res) => {
  		let cityRequested = req.params.name;
  		cityModel.findOne({ name: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});


module.exports = router;