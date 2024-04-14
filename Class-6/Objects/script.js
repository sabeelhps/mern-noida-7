// const person = {
//     name: "Max",
//     age: 25,
//     isAdult: true,
//     favColor: ["blue", "purple"],
//     favMovies: {
//         name: "Starwars",
//         director: {
//             name: "ABC"
//         },
//         year: 2010
//     }
// }


// // for-in looops
// for (let props in person) {
//     console.log(`${props} ---> ${person[props]}`);
// }



const menu = ["Chicken Biryani", "Egg Curry", "Kadhai Paneer", "Khamiri Roti", "Tandoori Roti"
    , "Garlic Bread", "Onion Rings", "Onion Pizza", "Sandwiches", "Chicken 65", "Malai chaap",
    "Paneer Tikka", "Dal Makhni", "Egg Biryani", "Dosa"];
    

// veg -> should not include : chicken and egg
// jain menu -> should not include : onion and garlic

const vegMenu = [];
const jainMenu = [];


for (let food of menu) {
    if (!(food.toLowerCase().includes('chicken') || food.toLowerCase().includes('egg'))) {
        vegMenu.push(food);
    }
}


for (let food of vegMenu) {
    if (!(food.toLowerCase().includes('onion') || food.toLowerCase().includes('garlic'))) {
        jainMenu.push(food);
    }
}


console.log(menu);
console.log(vegMenu);
console.log(jainMenu);



// https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions
