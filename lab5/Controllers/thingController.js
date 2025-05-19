import {Thing, User} from "../Model/DataAccess/Database.js"
export const getThings = async (req, res) => {
    try {
        const things = await Thing.findAll({raw: true});
        console.log(things);
        res.render("allThingsPage", { things, alertMessage: null });
    } catch (error) {
        console.error("Помилка отримання речей:", error);
        res.render("allThingsPage", {
            things: [],
            alertMessage: 'Помилка завантаження даних'
        });
    }
};

export const getThingfor = async (req, res) => {
    try {
        const thing = await Thing.findOne({
            where: { id: req.params.id },
            include: {
                model: User,
                attributes: ['name', 'phoneNumber', 'email']
            }
        });

        if (!thing) {
            return res.status(404).send("Річ не знайдена");
        }

        res.render("createPage", {
            id: thing.id,
            thingName: thing.name,
            place: thing.place,
            description: thing.description,
            name: thing.User.name,
            phoneNumber: thing.User.phoneNumber,
            email: thing.User.email,
            keyWords: thing.keyWords
        });

    } catch (error) {
        console.error("Помилка при отриманні речі:", error);
        res.status(500).send("Внутрішня помилка сервера");
    }
};

export default{getThings, getThingfor}
