import { sequelize } from "../Model/DataAccess/Database.js";
import Database from "../Model/DataAccess/Database.js";
import {User} from "../Model/DataAccess/Database.js"
export const addThingWithUser = async (req, res) => {
    const t = await sequelize.transaction();

    try {
        const { name, phoneNumber, email, thingName, place, description, keyWords } = req.body;

        let user = await User.findOne({ where: { phoneNumber }, transaction: t });
        if (!user) {
            user = await Database.addUserToDB({ name, phoneNumber, email }, t);
        }

        await Database.addThingToDB({ name: thingName, place, description, keyWords, user_id: user.id }, t);

        await t.commit();
        res.status(200).json("Річ додано успішно");
    } catch (error) {
        await t.rollback();
        console.error("Помилка транзакції:", error);
        res.status(400).json("помилка додавання");
    }
};







