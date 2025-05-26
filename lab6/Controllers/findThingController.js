import Database from "../Model/DataAccess/Database.js";

export async function findThing(req, res) {
    try {
        const keyWord = req.query.keyWord;

        if (!keyWord || typeof keyWord !== "string") {
            return res.status(400).json({ message: "Некоректний запит: ключове слово обов'язковий і має бути рядком" });
        }

        const results = await Database.findByKeyword(keyWord);
        if (results.length>0) {
            res.json(results);
        }
        else {
            return res.json({ message: "По вашому запиту нічого не знайдено" });
        }

    } catch (error) {
        console.error("Помилка пошуку:", error);
        res.status(500).json({ message: "Помилка сервера", error: error.message });
    }
}
