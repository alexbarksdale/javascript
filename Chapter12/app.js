const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("Couldn't get resource");
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

getTodos('todo/luigi.json')
    .then((data) => console.log('promise resolved', data))
    .catch((err) => console.log(err));

// getTodos((err, data) => {
//     console.log('fired');
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// promise example
// const getSomething = () => {
//     // @param are built into the function
//     return new Promise((resolve, reject) => {
//         // Fetch something
//         resolve('Some data');
//         // reject('error');
//     });
// };

// getSomething().then(
//     (data) => {
//         console.log(data);
//     },
//     (err) => console.log(err)
// );

// getSomething()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
