const section = document.querySelector('section');


async function loadAllProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    for (let product of products) {
        const image = document.createElement('img');
        image.setAttribute('src', product.image);
        image.style.border = '3px solid #ccc';
        image.style.margin = '1 rem';
        
        image.style.height = '500px';
        image.style.width = '400px';
        section.append(image);
    }
}

loadAllProducts();