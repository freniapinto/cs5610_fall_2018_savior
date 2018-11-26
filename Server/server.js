var express = require('express');
var app = express();

const fetch = require('node-fetch')
const URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=blood+donation+';
const APIKEY = '&key=AIzaSyCmOA0KnQvXguzgnzU1oU8c1hWAISGQer8';

const DETAILS = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';
const FIELDS = '&fields=name,rating,formatted_phone_number,opening_hours,geometry,url,formatted_address,website';

findAllBloodBanks = (req, res) =>{
    const keyword = req.params['city'];
    var result = '';
    res.setHeader('Access-Control-Allow-Origin', '*');
    findBanks(keyword)
        .then(resp => result = resp)
        .then(() => res.send(JSON.stringify(result['results'])));
    };

findAllDetailLines = (req, res) => {
    const keyword = req.params['placeid'];
    console.log(DETAILS+keyword+FIELDS+APIKEY);
    var result = '';
    res.setHeader('Access-Control-Allow-Origin', '*');
    findDetailBank(keyword)
        .then(resp => result = resp)
        .then(() => res.send(JSON.stringify(result['result'])))
};



findBanks = city => {
    return fetch(URL+city+APIKEY, {
            method: 'get'
        })
            .then(response => response.json())
            .then(places => places)
};

findDetailBank = placeid => {
    return fetch(DETAILS+placeid+FIELDS+APIKEY, {
        method: 'get'
    })
        .then(response => response.json())
        .then(details => details)
};





app.get('/banks/:city', findAllBloodBanks);

app.get('/banks/:city/:placeid', findAllDetailLines);

app.listen(4000);