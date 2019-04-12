import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();


//Dodawanie nowej Kolumny
router.route('/lanes').post(LaneController.addLane);

//Pobieranie kolumn
router.route('/lanes').get(LaneController.getLanes);

//Usuwanie kolumny
router.route('/lanes/:laneId').delete(LaneController.deleteLane);


//Edycja kolumny
router.route('/lanes').put(LaneController.editLane);


export default router;
