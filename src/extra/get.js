export default (object, path, defaultValue = undefined) => path.split('.').reduce((res, prop) => res[prop], object ) || defaultValue
