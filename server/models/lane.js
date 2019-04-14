import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import Note from '../models/note';
mongoose.plugin(schema => { schema.options.usePushEach = true });


const laneSchema = new Schema({
	name: {type: 'String', required: true},
	notes: [{type: Schema.ObjectId, ref: 'Note', required: true}],
	id: {type: 'String', required: true, unique: true}
});

function populateNotes(next) {
  this.populate('notes');
  next();
}

laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);


function deleteAllNotes(next) {
  const lineNotes = this.notes;
  console.log(lineNotes);
  lineNotes.forEach(note => {
  	console.log(note);
  	Note.findByIdAndRemove(note._id).exec()
  });
  next();	
}

laneSchema.pre('remove', deleteAllNotes);


export default mongoose.model('Lane', laneSchema);
