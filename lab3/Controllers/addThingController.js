import { Thing } from "../Model/Services/ThingService.js";
import { addThingToBD } from "../Model/DataAccess/Database.js";

export function addThing(req, res) {
    const {id, name, description, keyWords, place, phoneNumber } = req.body;
    const thing = new Thing(id, name, description, keyWords, place, phoneNumber);
    addThingToBD(thing);
    res.redirect("/MainPage.html");
}


