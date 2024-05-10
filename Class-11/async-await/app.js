// async and await

// function fun() {
//     return Promise.resolve("Hello from fun function");
// }

// const promise = fun();

// promise.then((str) => console.log(str));




// async function simpleFun() {
//     // if (true) {
//     //     throw new Error('custom error');
//     // }
//     return "Hello from fun function";
// }


// const p = simpleFun();



// =============================== await -----------------

// fetch('https://fakestoreapi.com/products/1')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })

console.log('START');


async function fetchData() {
    console.log('starting to fetch');
    const res = await fetch('https://fakestoreapi.com/products/1');
    console.log('after fetching the response, starting to parse');
    const data = await res.json();
    console.log('response parsing complete');
    console.log(data);
    console.log('Function END');
    return data;
}

function print(data) {
    console.log(data);
}

async function main() {
    const data = await fetchData();
    // console.log('Promise resolved going for print');
    print(data);
}

// main();

// console.log('After fetchData()');
// console.log('After fetchData()');
// console.log('After fetchData()');
// console.log('After fetchData()');
// console.log('After fetchData()');
// console.log('After fetchData()');
// console.log('After fetchData()');
// console.log('After fetchData()');
// console.log('After fetchData()');
// console.log('After fetchData()');

// console.log('END');


async function fetchProduct(productId) {
    const URL = `https://fakestoreapi.com/products/${productId}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

async function main() {
    console.time('timer1');
    // const product1 = await fetchProduct(1);
    // const product2 = await fetchProduct(2);
    // const product3 = await fetchProduct(3);
    // const product4 = await fetchProduct(4);

    const results = await Promise.all([fetchProduct(1), fetchProduct(2), fetchProduct(3), fetchProduct(4)]);

    console.log(results);
    // console.log(product1);
    // console.log(product2);
    // console.log(product3);
    // console.log(product4);
    console.timeEnd('timer1');
}

main();





