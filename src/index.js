import React from 'react';
import {choice, remove} from './helpers';
import Foods from './foods';

let fruit = choice(Foods);

console.log(`I'd like one ${fruit}, please.`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`)

let remaining = remove(fruit, Foods);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);

