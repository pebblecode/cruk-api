// import * from 'lodash' as _;

// import fields from './fields.json';

'use strict'

const fields = require('./fields.json');
const mapObj = require('map-obj');
const keys = Object.keys(fields);

const data = [
	require('./cancerdata.json'),
	require('./cities.json')
];

const out = []

const normalised_data = data.map(normaliseFields)

function normaliseFields(elem) {
	return _.mapKeys(elem, (value, key) => {
		keys.forEach(function(key){
			let change = fields[key].filter(function(value){
				return key === value
			});
			if (change) {
				return change
			} else {
				return key
			}
		});
	})
}

console.log(normalised_data)



// valid_data = data.map((dataset) => {
// 	dataset.map((item) => { _.extend(out, item) })
// })





