import {readFile} from 'fs/promises';

let things = {}

//////////////////////async/await
const filePathAsync = './Model/TextFiles/FilePromise';

async function readFileAsyncAwait(filePath) {
    try {
        const data=  await readFile(filePath, 'utf-8');
        things =  JSON.parse(data);
    } catch (e) {
        console.error("Помилка під час читання файлу з контактною інформацією:", e);
        return null;
    }
}
readFileAsyncAwait(filePathAsync).then(() => console.log(things));
/////////////////////async/await

export function getAllThingsFromDB(){
   return things
}

export function addThingToDB(thing) {
    things.push(thing);
    console.log(things);
}


export function deleteThingFromDB(id) {
    console.log("Масив речей:", things); // лог для перевірки
    const index = things.findIndex(t => t.id === id); // використовуємо строгий порівняльний оператор (===)
    console.log(things[index])
    if (index !== -1) {
        things.splice(index, 1); // видалення
        return true;
    }
    return false;
}

