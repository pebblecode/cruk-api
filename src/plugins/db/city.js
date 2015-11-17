import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const citySchema = new Schema({
  wikipedia: String,
  city: String,
  geo: {
    lat: Number,
    lon: Number
  },
  lat: Number,
  lon: Number,
  loc: {
    type: [Number], // [<longitude>, <latitude>]
    index: '2d' // create the geospatial index
  }
});

citySchema.pre('save', (next) => {
  this.loc = [this.lat, this.lon];
  next();
});

const City = mongoose.model('City', citySchema);

export default City;
