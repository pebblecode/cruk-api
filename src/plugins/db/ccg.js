import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ccg = new Schema({ccg:String});

// ccg.pre('save', (next) => {
//   this.loc = [this.lat, this.lon];
//   next();
// });

const Ccg = mongoose.model('Ccg', ccg);

export default Ccg;
