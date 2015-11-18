import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const fullccg = new Schema({ccg:String}, { strict: false });

const Fullccg = mongoose.model('Fullccg', fullccg);

export default Fullccg;