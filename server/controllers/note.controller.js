import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}


export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  const newNote = new Note({
    task: note.task,
  });

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ id: laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNote(req, res) {
  Note.findOneAndRemove({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ notes: note._id })
    .then(lane => {
      lane.notes.remove(note._id);
      lane.save();
    })
    .then(() => {
      res.status(200).end();
    });
  });
}



export function editNote(req, res) {
	if (!req.body.name) {
		return res.status(403).end();
	}
	Note.findOneAndUpdate({id: req.params.noteId}, {task: req.body.task}).exec((err, newTask) => {
    if(err) {
      res.status(500).send(err);
    }
    res.json(newTask);
  });
}

