async function getData() {
    console.log('Starting.........');
    const result = await someAsyncOperation();
    console.log(`Result:${result}`);
    return result;
}
function someAsyncOperation() {
    return new Promise(resolve => {
        setTimeout(() => resolve('operation completed'), 1000);
    });
}


//call the async function
getData().then(data => console.log('final data:', data));