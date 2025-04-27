import {deleteThingFromDB, getAllThingsFromDB} from "../DataAccess/Database.js";

export function getAllThings(){
    return getAllThingsFromDB()
}

export class Thing {
    constructor(id, name, description, keyWords, place, phoneNumber) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.keyWords = keyWords;
        this.place = place;
        this.phoneNumber = phoneNumber;
    }
}

export function deleteThingService(id) {
    return deleteThingFromDB(id);
}






