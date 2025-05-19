import express from "express";
import thingController from "./Controllers/thingController.js";
import {addThingToBD} from "./Controllers/addThingController.js"
import {deleteThing} from "./Controllers/deleteThingController.js"
import {findThing} from "./Controllers/findThingController.js";
import {updateThing, updateThingPage} from "./Controllers/updateThingController.js";
const app = express();
const router = express.Router();
router.post("/addThing", addThingToBD);
router.get("/allThings", thingController.getThings)
router.get("/thing/:id", thingController.getThingfor);
router.post("/deleteThing", deleteThing )
router.post("/findThing", findThing)
router.post("/updateThing", updateThing)
router.get("/updateThingPage", updateThingPage)
app.use("/users", router)

export default router
