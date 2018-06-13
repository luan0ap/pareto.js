const trace = (f, g) => (...args) => f(g(...args))
export default (...fns) => fns.reduce(trace)