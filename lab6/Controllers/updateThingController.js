import { sequelize } from "../Model/DataAccess/Database.js";
import Database from "../Model/DataAccess/Database.js";

export const updateThing = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        console.log(req.body)
        const id = req.params.id;
        const {thingName, place, description, keyWords } = req.body;

        await Database.updateThing({
            name: thingName,
            place,
            description,
            keyWords
        }, id, t);

        await t.commit();
        res.status(200).json("Річ оновлено успішно");
    } catch (error) {
        await t.rollback();
        console.error("Помилка оновлення речі:", error);
        res.status(400).json("не вдалось оновити");
    }
};
