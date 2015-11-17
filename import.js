import * from 'lodash' as _;

import fields from './fields.json';

const data = [
	require('./cancerdata.json'),
	require('./cities.json')
];

const out = {}

const normalised_data = data.map(normaliseFields)

function normaliseFields(elem) {
	return elem.mapKeys(elem, (value, key) => {
		if (fields[key]){
			return fields[key] 
		}
	})
}

valid_data = data.map((dataset) => {
	dataset.map((item) => _.extend(out, item)))
})


console.log(valid_data)