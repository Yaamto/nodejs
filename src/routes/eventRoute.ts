import express, { Router } from "express";
import { EventController } from "../controllers/eventController";
import { checkAuth } from "../middleware/checkAuth";
const router: Router = express.Router();

router.post("/", checkAuth, EventController.addEvent);
router.get("/", checkAuth, EventController.getEvents);
router.get("/get-events-name-capacity-adress", checkAuth, EventController.getEventsDependsOnNameAndCapacityANdAdress);
router.get("/:id", checkAuth, EventController.getOneEvent);
router.put("/:id", checkAuth, EventController.updateEvent);
router.delete("/:id", checkAuth, EventController.deleteEvent);

module.exports = router;
