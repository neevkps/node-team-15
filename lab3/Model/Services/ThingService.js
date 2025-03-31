import {getAllThingsFromBD} from "../DataAccess/Database.js";

export function getAllThings(){
    return getAllThingsFromBD()
}

export class Thing {
    constructor(id, name, description, keyWords, place, phoneNumber) {
        this.id = Date.now();
        this.name = name;
        this.description = description;
        this.keyWords = keyWords;
        this.place = place;
        this.phoneNumber = phoneNumber;
    }
}







