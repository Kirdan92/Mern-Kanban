import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

//Dodawanie nowej Karty
router.route('/notes').post(NoteController.addNote);


//Pobierz wszystkie karty
//router.route('/notes').get(NoteController.getNotes);



//Usuwanie Karty
router.route('/notes/:noteId').delete(NoteController.deleteNote);


//Edycja Karty
router.route('/notes/:noteId').put(NoteController.editNote);

export default router;
