import Database from "../Model/DataAccess/Database.js";

export const getThings = async (req, res) => {
    try {
        const things = await Database.getAllThings();
        console.log(things);
        res.render("allThingsPage", { things, alertMessage: null });
    } catch (error) {
        console.error("Error fetching things:", error);
        res.render("allThingsPage", {
            things: [],
            alertMessage: 'Помилка завантаження даних'
        });
    }
};
export const getThingfor = async (req, res) =>{
    const things = await Database.getAllThings();
    const thing = things.find(t => t.id ===  Number(req.params.id));
    if (thing) {
        res.render("createPage", {
            id: thing.id,
            name: thing.name,
            place: thing.place,
            description: thing.description,
            phone: thing.phoneNumber,
            email: thing.email,
        });
    }
};

export default{getThings, getThingfor}
