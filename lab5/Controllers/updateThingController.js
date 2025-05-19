import { sequelize } from "../Model/DataAccess/Database.js";
import Database from "../Model/DataAccess/Database.js";


export const updateThingPage = async (req, res) => {
    const objectEJS = {
        ...req.query
    }
    res.render('updateThing', objectEJS)
}
export const updateThing = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const {
            thingId,
            thingName,
            place,
            description,
            keyWords
        } = req.body;

        await Database.updateThing({
            name: thingName,
            place,
            description,
            keyWords
        }, thingId, t);

        await t.commit();
        res.redirect(`/thing/${thingId}?message=` + encodeURIComponent("Оновлено успішно"));
    } catch (error) {
        await t.rollback();
        console.error("Помилка оновлення речі:", error);
        res.redirect("/MainPage.html?message=" + encodeURIComponent("Помилка оновлення"));
    }
};
