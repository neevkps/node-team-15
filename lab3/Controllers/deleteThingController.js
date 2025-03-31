import {Thing} from "../Model/Services/ThingService.js";
import {addThingToBD} from "../Model/DataAccess/Database.js";

export function deleteThing(req, res) {
    const { name, description, keywords, place, phoneNumber } = req.body;
    const thing = new Thing(name, description, keywords, place, phoneNumber);
    addThingToBD(thing);
    res.redirect("/MainPage.html");
}