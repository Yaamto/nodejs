import express, { Router } from "express";
import { AdressController } from "../controllers/adressController";
import { checkAuth } from "../middleware/checkAuth";
const router: Router = express.Router();

router.post("/", checkAuth, AdressController.addAdress);
router.get("/", checkAuth, AdressController.getAdresss);
router.get("/:id", checkAuth, AdressController.getOneAdress);
router.put("/:id", checkAuth, AdressController.updateAdress);
router.delete("/:id", checkAuth, AdressController.deleteAdress);

module.exports = router;
