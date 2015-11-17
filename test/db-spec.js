'use strict';
// const expect = require('chai').expect;
// const moment = require('moment');
import { City, Hospital } from '../src/db.js';

City.find({"city" : "Zagreb"}, (err, coll) => console.log(err, coll));
