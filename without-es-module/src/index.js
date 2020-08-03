/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//  自定义 css 文件
import './css/base.css';

// 第三方库(node_modules)
import { forEach } from 'lodash';
forEach([1, 2, 3], (item) => {
    console.info(item);
});

// 自定义 js 文件
import { sayHello } from './js/helper.js';
sayHello('hello world');