'use strict';

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/cruk');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const hospitalSchema = new Schema({
	'CCG Name': String,
	'CCG Node': String,
	'PCT': String,
	'Region': String,
	'Incidences': Number,
	'Deaths': Number,
	'1yr Survival Rate': Number,
	'Specialist': Number,
	'1st treatment': Number,
	'diagnostic': Number,
	'emergency routes': Number,
	'screening': Number,
	'awareness': Number,
});

var citySchema = new Schema({  
    wikipedia: String,
    city: String,
    lat: Number,
    lon: Number,
    loc: {
	    type: [Number],  // [<longitude>, <latitude>]
	    index: '2d'      // create the geospatial index
    }
});

citySchema.pre('save', (next) => {
	this.loc = [this.lat, this.lon];
	next()
});

const Hospital = mongoose.model('Hospital', hospitalSchema);
const City = mongoose.model('City', citySchema);

module.exports = {
	Hospital,
	City,
}
