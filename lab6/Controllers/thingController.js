import {Thing, User} from "../Model/DataAccess/Database.js"
export const getThings = async (req, res) => {
    try {
        const things = await Thing.findAll({raw: true});
        console.log(things);
        res.json({ things, alertMessage: null });
    } catch (error) {
        console.error("Помилка отримання речей:", error);
        res.status(400).json({things: [], alertMessage: 'Помилка завантаження даних'});
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

        res.json(thing);

    } catch (error) {
        console.error("Помилка при отриманні речі:", error);
        res.status(500).send("Внутрішня помилка сервера");
    }
};

export default{getThings, getThingfor}
