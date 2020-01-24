'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input object?
 * 
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) => {
    return typeof input === 'object';
}
/**
 * Based on a set of rules, is the input array?
 * 
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input) => {
    if (typeof input === Array) return false;
}
/**
 * Based on a set of rules, is the input bolean?
 * 
 * @param input
 * @returns {boolean}
 */
validator.isBool = (input) => {
    if (typeof input === 'bolean') return false;
}
/**
* Based on a set of rules, is the input function?
* 
* @param input
* @returns {boolean}
*/
validator.isFunc = (input) => {
    if (typeof input === "function") return false;
}

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
validator.isNum = (input) => {
    if (typeof input === "number") return false;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
    return typeof input === 'string';
};


// const personRules = {
//     fields: {
//       id: {type: 'string', required: true},
//       name: {type: 'string', required: true},
//       age: {type: 'number', required: true},
//       children: { type: 'array', valueType: 'string' },
//     },
//   };
/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
// const fred = {
//     id:38,
//     name:'Freddy McCoder',
//     children:[],
//   };
validator.isValid = (input, rules) => {
  
    if (!(input.id && typeof input.id === 'string')) { console.log(!(input.id && typeof input.id === 'string')); return false }
    if (!(input.name && typeof input.name === 'string')) { console.log('string',!(input.name && typeof input.name === 'string')); return false }
    if (!(input.age && typeof input.age === 'number')) { console.log('number)',!(input.age && typeof input.age === 'number')); return false }
    // input.children.forEach(child=>{if(typeof child ==='string'){ console.log('hi')}})
    if (!(input.children && Array.isArray( input.children))) { console.log('Array)', Array.isArray( input.children)); return false }
   return true;
}




