import {getAllThings} from "../Model/Services/ThingService.js";

export const getThings = (req, res) =>{
    const things = getAllThings()
    res.render("allThingsPage", { things });
};

export default{getThings}