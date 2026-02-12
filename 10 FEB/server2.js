const fs = require('fs').promises;
const path = require('path');

const filepath = path.join(__dirname,'example.txt');

async function writeFile(){
    await fs.writeFile(filepath,'Hello World in file2\n','utf-8');
    console.log("File written");
}

async function appendFile(){
    await fs.appendFile(filepath,'Appended text\n','utf-8');
    console.log("File appended");
}

async function readFile(){
    const data = await fs.readFile(filepath,'utf-8');
    console.log("File Content\n", data);
}

async function deleteFile(){
    await fs.unlink(filepath);
    console.log("File deleted");
}

async function run(){
    await writeFile();
    await appendFile();
    await readFile();
    await deleteFile();
}

run();