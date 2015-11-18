import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ccg = new Schema({ccg: String, incidences: Number, deaths: Number}, { strict: false });

const Ccg = mongoose.model('Ccg', ccg);

export default Ccg;
