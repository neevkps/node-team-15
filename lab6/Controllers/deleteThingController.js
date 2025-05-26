import { sequelize } from "../Model/DataAccess/Database.js";
import Database from "../Model/DataAccess/Database.js";

export const deleteThing = async (req, res) => {
    const id = req.params.id;
    const t = await sequelize.transaction();

    try {
        const deletedCount = await Database.deleteThingFromDB(id, t);

        if (deletedCount === 0) {
            await t.rollback();
            return res.status(400).json({
                alertMessage: "Річ не знайдена або вже видалена"
            });
        }

        await t.commit();
        res.status(204).json();
    } catch (error) {
        await t.rollback();
        console.error("Помилка при видаленні:", error);
        res.json("Сталася помилка сервера");
    }
}
