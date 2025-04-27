import { Thing } from "../Model/Services/ThingService.js";
import { addThingToDB } from "../Model/DataAccess/Database.js";

export function addThing(req, res) {
    const  thing = req.body;
    const id= Date.now();
    addThingToDB({...thing, id});
    res.redirect("/MainPage.html");
}


