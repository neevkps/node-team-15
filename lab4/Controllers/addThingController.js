import Database from "../Model/DataAccess/Database.js";
export async function addThingToBD(req, res) {
    const {
        name,
        phoneNumber,
        description,
        place,
        email,
        keyWords
    } = req.body;

    // Перевірка наявності всіх полів
    if (!name || !phoneNumber || !description || !place || !email ||!keyWords) {
        res.redirect('/addThing.html?message=' + encodeURIComponent('Заповніть усі поля'));
    }

    console.log('Отримано дані для запису:', req.body);

    try {
        const result = await Database.addThing(name, phoneNumber, description, place, email, keyWords);

        if (result.success) {
            res.redirect('/addThing.html?message=' + encodeURIComponent('Річ успішно додано'));
        } else {
            res.redirect('/addThing.html?message=' +  encodeURIComponent(result.message));
        }
    } catch (error) {
        console.error('Помилка додавання знахідки:', error);
        res.redirect('/addThing.html?error=' + encodeURIComponent('Помилка додавання знахідки: ' + error.message));
    }
}



