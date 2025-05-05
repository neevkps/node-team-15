import Database from "../Model/DataAccess/Database.js";
export const deleteThing=async(req, res) =>{
    const id = req.body.id;

    try {

        await Database.deleteThings(id)
            res.redirect ("/MainPage.html");



    } catch (error) {
        console.error('Помилка', error);
        res.render("allThingsPage", {
            alertMessage: 'Сталася помилка сервера'
        });   }
}