
import sql from "mssql"

let things = {}

const SQLConfig = {
    user: 'neevkps',
    password: '2611',
    database: 'vovadaun',
    server: 'localhost',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
const pool = await
    sql.connect(SQLConfig);
class Database{
    static async addThing(name, phoneNumber, description, place, email, keyWords){
        if (!pool) {
            throw new Error('Database connection is not initialized');
        }

        try {
            const result = await pool.request()
                .input("name", sql.VarChar(50), name)
                .input("phoneNumber", sql.VarChar(50), phoneNumber)
                .input("description", sql.VarChar(200), description)
                .input("place", sql.VarChar(50), place)
                .input("keyWords", sql.VarChar(200), keyWords)
                .input("email", sql.VarChar(50), email)
                .execute("addThing");

            return { success: true, message: "Запис успішно додано." };
        } catch (error) {
            console.error("Помилка при додаванні запису:", error);
            return { success: false, message: "Сталася помилка при додаванні запису: " + error.message };
        }
    }
    static async getAllThings() {
        if (!pool) {
            throw new Error('Database connection is not initialized');
        }

        try {
            const result = await pool.request()
                .query("SELECT * FROM Things");
            return result.recordset;
        } catch (error) {
            console.error("Помилка при отриманні даних:", error);
            return [];
        }
    }
    static async deleteThings(id) {
        if (!pool) {
            throw new Error('Database connection is not initialized');
        }

        try {
            const result = await pool.request()
                .input('id', sql.Int, id)
                .query('DELETE FROM Things WHERE id = @id');
            return { success: true, message: "Видалено успішно." };
        } catch (error) {
            console.error("Помилка при отриманні даних:", error);
            return [];
        }
    }
    static async updateThing(data, id) {
        if (!pool) {
            throw new Error('Database connection is not initialized');
        }

        try {
            const result = await pool.request()
                .input("id", id)
                .input("name", data.name)
                .input("place", data.place)
                .input("description", data.description)
                .input("keyWords", data.keyWords)
                .query(`
                UPDATE Things
                SET name = @name,
                    place = @place,
                    description = @description,
                    keyWords = @keyWords
                WHERE id = @id
            `);

            if (result.rowsAffected[0] === 0) {
                return { success: false, message: "Запис не знайдено" };
            }

            return { success: true };
        } catch (error) {
            console.error("Помилка при оновленні речі:", error);
            return { success: false, error: error.message };
        }
    }


}

export default Database;




