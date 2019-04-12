import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

//Dodawanie nowej Karty
router.route('/notes').post(NoteController.addNote);


//Usuwanie Karty
router.route('/notes/:noteId').delete(NoteController.deleteNote);


//Edeycja Karty
router.route('/notes').put(NoteController.editNote);

export default router;
