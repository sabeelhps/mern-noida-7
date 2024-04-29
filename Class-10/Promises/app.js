
// 1. Creation a promise
const p = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum % 2 == 0) {
        resolve(randomNum);
    } else {
        reject(new Error(`Number is odd ${randomNum}`));
    }
});

//2. consuming a promise

p
    .then((randomNum) => {
        console.log('inside resolve', randomNum);
    })
    .catch((err) => {
        console.log('inside reject');
        console.log(err.message);
    })
    .finally(() => {
        console.log('inside finally');
    })


