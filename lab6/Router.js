import express from "express";
import thingController from "./Controllers/thingController.js";
import {addThingWithUser} from "./Controllers/addThingController.js";
import {deleteThing} from "./Controllers/deleteThingController.js"
import {findThing} from "./Controllers/findThingController.js";
import {updateThing} from "./Controllers/updateThingController.js";
const app = express();
const router = express.Router();
router.post("/thing/add", addThingWithUser);
router.get("/things", thingController.getThings)
router.get("/thing/:id", thingController.getThingfor);
router.delete("/things/:id", deleteThing )
router.get("/things/search", findThing)
router.put("/things/:id", updateThing)

app.use("/users", router)

export default router


