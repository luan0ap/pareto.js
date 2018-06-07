const trace = (f, g) => (...args) => f(g(...args))
export default compose = (...fns) => fns.reduce(trace)