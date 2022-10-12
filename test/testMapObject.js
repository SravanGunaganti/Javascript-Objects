const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const mapObject =require('../mapObject.js');
const cb = (element) => element + " Obj";
const result = mapObject(testObject, cb);
console.log(result);
