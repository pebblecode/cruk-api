import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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
  'awareness': Number
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;
