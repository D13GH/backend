const mongoose = require('mongoose');
mongoose.connect('mongodb://sa:sasa@ds157320.mlab.com:57320/guanajuapp');


const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const placeSchema = new Schema({
    place:ObjectId,
    lugar: String,
    municipio: String,
    descripcion: String,
    name: String
},{
    versionKey: false
});


var Place = mongoose.model('Places', placeSchema);

module.exports = Place;
