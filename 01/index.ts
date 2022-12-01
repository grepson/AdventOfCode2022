import * as fs from 'fs';
import {resolve} from 'path';

const parsedArray = fs.readFileSync(resolve(__dirname, 'input.txt'), {encoding: 'utf-8'})
    .split('\n\n')
    .map((numbers) => numbers.split('\n').reduce((acc, next) => acc + parseInt(next), 0))

const maxElf = parsedArray.reduce((acc, next) => acc < next ? next : acc);

console.log('The most calories that elf has is: ', maxElf);

const threeMax = [...parsedArray].sort((a, b) => a - b).slice(parsedArray.length - 4, parsedArray.length - 1);

console.log('Three elves that have the most calories: ', threeMax);

console.log('Sum of calories: ', threeMax.reduce((a,b) => a + b));