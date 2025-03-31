import {getAllThings} from "../Model/Services/ThingService.js";
export function FindThing(req, res) {
    try {
        const { keyWord } = req.body.toString();

        // Перевірка, чи отримано keyWord, і чи це рядок
        if (!keyWord || typeof keyWord !== "string") {
            return res.status(400).json({ message: "Некоректний запит: keyWord обов'язковий і має бути рядком" });
        }

        let findthings = getAllThings();

        // Перевірка, чи getAllThings() повернув масив
        if (!Array.isArray(findthings)) {
            return res.status(500).json({ message: "Помилка сервера: getAllThings() повернув некоректні дані" });
        }

        let results = findthings.filter(item =>
            item?.keyWords && typeof item.keyWords === "string" &&
            item.keyWords.toLowerCase().includes(keyWord.toLowerCase())
        );

        res.json({
            message: results.length > 0 ? "Знайдені речі" : "Нічого не знайдено",
            data: results
        });
    } catch (error) {
        res.status(500).json({ message: "Помилка сервера", error: error.message });
    }
}