import { connect } from 'react-redux';
import Notes from './Notes';
import {editNote, updateNoteRequest, deleteNoteRequest, moveWithinLane } from '../Note/NoteActions';

const mapDispatchToProps = {
  onValueClick: editNote,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
  moveWithinLane,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
