import { sequelize } from "../Model/DataAccess/Database.js";
import Database from "../Model/DataAccess/Database.js";

export const deleteThing = async (req, res) => {
    const id = req.body.id;
    const t = await sequelize.transaction();

    try {
        const deletedCount = await Database.deleteThingFromDB(id, t);

        if (deletedCount === 0) {
            await t.rollback();
            return res.render("allThingsPage", {
                alertMessage: "Річ не знайдена або вже видалена"
            });
        }

        await t.commit();
        res.redirect("/MainPage.html?message=" + encodeURIComponent("Річ успішно видалена"));
    } catch (error) {
        await t.rollback();
        console.error("Помилка при видаленні:", error);
        res.render("allThingsPage", {
            alertMessage: "Сталася помилка сервера"
        });
    }
}
