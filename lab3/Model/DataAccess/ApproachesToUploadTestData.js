import {readFile} from 'fs/promises';
import fs, {readFileSync} from "fs";

//////////////////////sync
const filePathSync = ('../TextFiles/FilePromise');
try {
    const data = readFileSync(filePathSync, 'utf-8');
    try {
        const jsonData = JSON.parse(data);
        console.log("Синхронний ввід-вивід:");
        console.log(jsonData);
    } catch (parseError) {
        console.error("Помилка при парсингу JSON:", parseError);
    }
} catch (error) {
    console.error("Помилка при читанні файлу:", error);
}
//////////////////////sync

//////////////////////async/await
const filePathAsync = '../TextFiles/FilePromise';

async function readFileAsyncAwait(filePath) {
    try {
        const data=  await readFile(filePath, 'utf-8');
        console.log("Асинхронний ввід-вивід з використанням async/await");
        return JSON.parse(data);
    } catch (e) {
        console.error("Помилка під час читання файлу з контактною інформацією:", e);
        return null;
    }
}
readFileAsyncAwait(filePathAsync).then(data => console.log(data));
/////////////////////async/await

////////////////////callback
function readFileCallback(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            callback(error, null);
            return;
        }
        try {
            const parsedData = JSON.parse(data);
            callback(null, parsedData);
        } catch (parseError) {
            callback(parseError, null);
        }
    });
}

function CallbackDescription(error, data) {
    if (error) {
        console.error(`Помилка: ${error.message}`);
    } else {
        console.log('Дані завантажені колбеком:');
        console.log(data);
    }
}
readFileCallback('../TextFiles/FilePromise', CallbackDescription);
//////////////////callback

//////////////////Promise
function readFilePromise(filePathPromise) {
    return new Promise((resolve, reject) => {
        readFile(filePathPromise, 'utf-8')
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}
const filePathPromise = '../TextFiles/FilePromise';

readFilePromise(filePathPromise)
    .then(data => {
        try {
            const PromiseData = JSON.parse(data);
            console.log("Дані зчитані промісом:");
            console.log(PromiseData);
        } catch (error) {
            console.error("Помилка при парсингу JSON:", error);
        }
    })
    .catch(error => {
        console.error("Помилка при читанні файлу:", error);
    });
//////////////////Promise
