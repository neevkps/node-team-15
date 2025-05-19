import Database from "../Model/DataAccess/Database.js";

export const updateThingPage = async (req, res) => {
    const objectEJS = {
        ...req.query
    }
    res.render('updateThing', objectEJS)
}
export const updateThing = async (req, res) => {
    try {
        const {
            id,
            name,
            place,
            description,
            keyWords
        } = req.body;

        const result = await Database.updateThing({
            name,
            place,
            description,
            keyWords
        }, id);
        if (result.success) {
            res.redirect(`/thing/${id}?message=` + encodeURIComponent("Оновлено успішно"));
        }
    } catch (error) {
        console.error('Помилка додавання знахідки:', error);
        res.redirect('/MainPage.html?message=' + encodeURIComponent('Помилка додавання знахідки: ' + error.message));
    }
};
