export default (obj, props) => Object.keys(props).every(key => obj[key] === props[key])
