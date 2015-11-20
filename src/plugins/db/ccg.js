import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ccg = new Schema({
  ccg: String,
  incidences: Number,
  deaths: Number,
  name: String,
  oneYearSurvivalRate: Number,
  specialist: Number,
  firstTreatment: Number
}, { strict: false });

const Ccg = mongoose.model('Ccg', ccg);

export default Ccg;
//db.ccgs.update({}, {$rename:{"ccg":"ccgCode"}},false,true)