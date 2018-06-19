export default (array, fn) => array.reduce((acc, current) => [...acc, ...fn(current)], []);
