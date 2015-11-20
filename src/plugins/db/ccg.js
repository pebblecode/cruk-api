import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ccg = new Schema({
  ccg: String,
  incidences: Number,
  deaths: Number,
  name: String,
  oneYearSurvivalRate: Number,
  specialist: Number,
  firstTreatment: Number,
  patients: {
    total_all: {
      type: Number,
      default: 200000
    }
  }
}, { strict: false });

const Ccg = mongoose.model('Ccg', ccg);

export default Ccg;
