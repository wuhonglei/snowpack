/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';
import './css/base.css';

import { default as _ } from 'lodash';
_.forEach([1, 2, 3], (item) => {
    console.info(item);
});

var obj = {};
console.info('optional', obj.name?.age)
console.info('??', obj.name ?? 3)

confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
})({ particleCount: 200, spread: 200 });