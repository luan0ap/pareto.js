export default (...fns) => initial => fns.reduce((acc, fn) => fn(acc), initial)
