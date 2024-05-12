const fs = require('fs/promises');

async function main() {
    const file = await fs.readFile('abc.txt', {
        encoding:'utf-8'
    });
    console.log(file);
}

main();