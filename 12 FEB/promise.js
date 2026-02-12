const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve('operation completed successfully');
        } else {
            reject(new Error('operation failed'));
        }
    }, 1000);
});

myPromise
    .then(result => console.log("success", result))
    .catch(error => console.error("Error", error.message));