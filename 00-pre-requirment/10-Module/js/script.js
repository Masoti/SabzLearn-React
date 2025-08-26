// import = وارد کردن / export = صادر کردن

// import {userName} from './utils.js';
// console.log(userName); 

// import {userName , number} from './utils.js';
// console.log(userName, number);

// import * as Utils from './utils.js';
// console.log(Utils);
// console.log(Utils.userName, Utils.number);

// import * as Utils from './utils.js';
// let {userName, number} = Utils;
// console.log(userName, number);

// import {userName as userFirstName , number} from './utils.js';
// console.log(userFirstName, number);

// import {userName as userFirstName , number, double} from './utils.js';
// console.log(userFirstName, number, double(7));

// import userFullName from './utils.js';
// console.log(userFullName);
// import userِData from './utils.js';
// console.log(userِData);

// import {userName as userFirstName , number} from './utils.js';
// import {userName as Name, number, double} from './utils.js';
// console.log(Name, number, double(12));

import userData, {userName as Name, number, double} from './utils.js';  
console.log(userData, Name, number, double(12)); 