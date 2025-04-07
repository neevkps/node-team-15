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
            name: thing.name,
            place: thing.place,
            email: thing.email,
            phone: thing.phone
        });
    } else {
        res.status(404).send("Предмет не знайдено");
    }
};

export default{getThings, getThingfor}