const fs = require('fs').promises;

async function readFileExample(){
    try {
        const data = await fs.readFile('myfile.txt','utf-8')
        console.log('File Content',data);
        
    } catch (error) {
        console.error('Error Handling', error);
    }
}

readFileExample();

// we can also accuire it by util.promisify

const {promisify} = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readWithPromisify(){
    try {
        const data = await readFileAsync('myfile.txt','utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

readWithPromisify();