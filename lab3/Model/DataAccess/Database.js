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

export function getAllThingsFromBD(){
   return things
}

export function addThingToBD(thing) {
    things.push(thing);
}

export function deleteThingFromBD(thing){
    things.pop(thing);
}