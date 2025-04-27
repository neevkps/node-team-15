import {deleteThingService, Thing} from "../Model/Services/ThingService.js";
import {addThingToDB, deleteThingFromDB} from "../Model/DataAccess/Database.js";


export function deleteThing(req, res) {
    const { id } = req.body;
    const numericId = Number(id);
    const wasDeleted = deleteThingService(numericId);

    if (wasDeleted) {
        res.redirect("/MainPage.html");
    } else {
        res.status(404).send("Об'єкт не знайдено");

    }
}

