const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaults =require('../defaults');
const defaultProps = { weight: "80Kg", age: 40, sex: "Male" };
const result = defaults(testObject, defaultProps);
console.log(result);
