import express from "express";
import thingController from "./Controllers/thingController.js";
import  {addThing} from "./Controllers/addThingController.js"
import {deleteThing} from "./Controllers/deleteThingController.js"
import {findThing} from "./Controllers/findThingController.js";
const app = express();
const router = express.Router();
router.post("/addThing", addThing);
router.get("/allThings", thingController.getThings)
router.get("/:id", thingController.getThingfor);
router.delete("/deleteThing", deleteThing )
router.post("/findThing", findThing)
app.use("/users", router)

export default router
