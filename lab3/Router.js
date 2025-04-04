import express from "express";
import thingController from "./Controllers/thingController.js";
import  {addThing} from "./Controllers/addThingController.js"
import {deleteThing} from "./Controllers/deleteThingController.js"
import {findThing} from "./Controllers/findThingController.js";
const app = express();
const router = express.Router();

router.post("/addThing", addThing);
router.get("/allThings", thingController.getThings)
router.delete("/deleteThing", deleteThing )
router.post("/findThing", findThing)
app.use("/users", router)

export default router



app.get("/iphone",(req, res)=>{
    res.render("createPage", {id:1, name:"iphone 24 pro excel", img:"cz", description:"Айфон найновішої моделі, розроблений за підтримки Майкрософт. Валявся на поляні під шарою, синенький як студенти"})
});

app.get("/knife",(req, res)=>{
    res.render("createPage", {id:2, name:"ніж", img:"xzc", description:"Знайшли на поляні, в синенькому студенті, під шарою."})
});

app.get("/boat",(req, res)=>{
    res.render("createPage", {id:3, name:"лодка", img:"sc", description:"Знайшли на зупинці швидкісного трамваю, на коліях. Розмір 2*3м, без моторчика"})
});
