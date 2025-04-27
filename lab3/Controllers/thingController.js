import {getAllThings} from "../Model/Services/ThingService.js";

export const getThings = (req, res) =>{
    const things = getAllThings()
    res.render("allThingsPage", { things });
};
export const getThingfor = (req, res) =>{
    const things = getAllThings()
    const thing = things.find(t => t.id ===  Number(req.params.id));
    if (thing) {
        res.render("createPage", {
            id: thing.id,
            name: thing.name,
            place: thing.place,
            description: thing.description,
            phone: thing.phoneNumber
        });
    } else {
        res.status(404).send("Предмет не знайдено");
    }
};

export default{getThings, getThingfor}