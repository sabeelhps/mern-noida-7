const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = nums.reduce((acc, itr) => acc + itr, 0);

// console.log(sum);

const cart = [
    { name: 'Iphone', price: 10, qty: 5 },
    { name: 'Ipad', price: 5.5, qty: 2 },
    { name: 'Apple Watch', price: 8, qty: 4 }
];

const totalAmount = cart.reduce((acc, itr) => acc + itr.price * itr.qty, 0);

console.log(totalAmount);


const arr = [[1, 2, 3], [4, 5], [6, 7, 8, 9, 10], 90, 100, [2356, 3256]];


// ans :  res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const res = arr.reduce((acc, itr) => acc.concat(itr), []);


console.log(res);



function reverseNum(num) {
    // ans : 54321
    let ans = 0;

    while (num != 0) {
        const rem = num % 10;
        ans = ans * 10 + rem;
        num = parseInt(num / 10);
    }

    console.log(ans);
}

reverseNum(12345);

