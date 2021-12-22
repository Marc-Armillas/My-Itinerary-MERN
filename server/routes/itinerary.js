const express = require('express')
const router = express.Router()
const itineraryModel = require('../model/itineraryModel')

router.get('/test', (req, res) => {
    res.send({ msg: 'Itineraries test route.' })

})

//rectificar el post 
router.post('/', (req, res) => {
    const newItinerary = new itineraryModel({
        name: req.body.name,
        profile: req.body.profile,
        rating: req.body.rating,
        duration: req.body.duration,
        price: req.body.price,
        hashtag: req.body.hashtag,
        namr_city: req.body.name_city
    })

    itineraryModel.findOne({ title: newItinerary.title })
    .then(itinerary => {
        if (itinerary) res.status(500).send("Choose another title, this already exists in the DB")
    }) 
    
    newItinerary.save()
        .then(itinerary => {
            res.send(itinerary)
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
})

router.get('/all', (req, res) => {
    itineraryModel
        .find({})
        .then(files => {
            res.send(files);
        })
        .catch(err => console.log(err));
});

router.get('/bycity/:city_id',
    (req, res) => {
        let cityRequested = req.params.name_city;
        itineraryModel.findOne({ name_city: cityRequested })
            .populate('name_city') //TODO populate with less things, not everything is needed here and a lot of data is duplicated
            .exec((err, files) => {
                console.log(files);
                res.send(files)
            })
});

module.exports = router;