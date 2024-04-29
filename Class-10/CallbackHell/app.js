// // download file


// function downloadFile(url, dowloaded) {
//     const fileName = url.split('/').pop();
//     console.log(`starting to download the file : ${fileName}`);
//     setTimeout(() => {
//         dowloaded(fileName);
//     }, 3000);
// }

// function compressFile(fileName, compressed) {
//     console.log(`Starting to compress the file : ${fileName}`);
//     const compressedFileName = fileName.split('.')[0] + '.zip';
//     setTimeout(() => {
//         compressed(compressedFileName);
//     }, 2000);
// }

// function uploadFile(compressedFileName, uploaded) {
//     console.log(`Starting to upload the file :${compressedFileName}`);
//     setTimeout(() => { 
//         uploaded(compressedFileName);
//     }, 1000);
// }

// const url = 'http://facebook.com/dashgjk326784/profile.jpg';

// // downloadFile(url, function (fileName) {
// //     console.log(`Download completed for the file ${fileName}`);
// //     compressFile(fileName, function (compressedFileName) {
// //         console.log(`File compressed successfuly : ${compressedFileName}`);
// //         uploadFile(compressedFileName, function (compressedFileName) {
// //             console.log(`File uploaded successfully : ${compressedFileName}`);
// //             console.log('Everything is done!');
// //         })
// //     })
// // });








// // ======================================

// console.log("START");

// const str = "Hello";

// setTimeout(function () {
//     console.log('Inside 1st set timeout');
// }, 1000);

// setTimeout(function () {
//     console.log('Inside second timeout');
// }, 0);

// // for (let i = 100; i > 50; i = i + 10){
// //     console.log(i);
// // }

// console.log("END");


// ===============================Better code using promise

function downloadFile(url) {
    return new Promise((resolve, reject) => {
        const fileName = url.split('/').pop();
        console.log(`starting to download the file : ${fileName}`);
        setTimeout(() => {
            resolve(fileName);
        }, 3000);
    })
}

function compressFile(fileName) {
    return new Promise((resolve, reject) => {
        console.log(`Starting to compress the file : ${fileName}`);
        const compressedFileName = fileName.split('.')[0] + '.zip';
        if (true) {
            throw new Error(`Compression failed for the file : ${fileName}`);
        }
        setTimeout(() => {
            resolve(compressedFileName);
        }, 2000);
    })
}

function uploadFile(compressedFileName) {
    return new Promise((resolve, reject) => {
        console.log(`Starting to upload the file :${compressedFileName}`);
        setTimeout(() => { 
            resolve(compressedFileName);
        }, 1000);
    })
}


// downloadFile('http://facbook.com/321567828/newImage.jpg')
//     .then((fileName) => {
//         console.log(`file donwloaded successfully :${fileName}`);
//         return compressFile(fileName);
//     })
//     .then((compressedFileName) => {
//         console.log(`file compressed successfully : ${compressedFileName}`);
//         return uploadFile(compressedFileName);
//     })
//     .then((compressedFileName) => {
//         console.log(`File uploaded successfullY : ${compressedFileName}`);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })
//     .finally(() => {
//         console.log('Process completed');
//     })






































