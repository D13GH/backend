const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const Place = require('./data/mongooseClient');
const path = require('path');
const url = require('url');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("SERVER 2.0")
});

app.post('/place/create',(req,res)=>{
    var {lugar,municipio,descripcion,name} = req.body || {};
    let newPlace = Place({
        lugar,
        municipio,
        descripcion,
        name
    })
    newPlace.save((err,place)=>{
        if (err) throw err;
        res.send(place)
    })
});

app.get('/place/municipio/:municipio',(req,res)=>{
    let {municipio} = req.params
    Place.find({"municipio":municipio},(err,result)=>{
        res.send(result)
    })
});

app.get('/place/lugar/:lugar',(req,res)=>{
    let {lugar} = req.params
    Place.find({"lugar":lugar},(err,result)=>{
        res.send(result)
    })
});

app.get('/place/:id',(req,res)=>{
    let {id} = req.params
    Place.findById(id,(err,result)=>{
        res.send(result)
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));