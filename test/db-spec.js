'use strict';
// const expect = require('chai').expect;
// const moment = require('moment');
import Hospital from '../src/plugins/db';

// const Hospital = require('../lib/db.js').Hospital;

Hospital.find({}, (err, coll) => console.log(err, coll));
