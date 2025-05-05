import Database from "../Model/DataAccess/Database.js";
export async function findThing(req, res) {
    try {
        const keyWord = req.body.keyWord;

        if (!keyWord) {
            return res.status(400).json({ message: "Некоректний запит: keyWord обов'язковий і має бути рядком" });
        }

        let findthings = await Database.getAllThings();


        let results = findthings.filter(item =>
            item?.keyWords && typeof item.keyWords === "string" &&
            item.keyWords.toLowerCase().includes(keyWord.toLowerCase())
        );

        let output = results.length > 0
            ? "Знайдені речі:<br>" + results.map(item => `<b>${item.name}</b> (${item.place}) <br>`).join('')
            : "<p>Нічого не знайдено</p>";

        res.send(output);
    } catch (error) {
        res.status(500).json({ message: "Помилка сервера", error: error.message });
    }
}
