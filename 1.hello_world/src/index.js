/*
index.js here is the entry point of webpack
1. commands:
    dev env:
    npx webpack ./src/index.js -o ./build/built --mode=development

    prod env:
    npx webpack ./src/index.js -o ./build/built --mode=production

    (npx is used to run the executable installed through npm)
2. conclusions:
    a. webpack can bundle js/json files, but cannot bundle css/img files
    b. bundle result in production mode is much smaller then the bundle result in development mode
*/
const {name} = require('./data.json');
console.log(name)

function add(x, y) {
    return x + y;
}

console.log(add(1,2))