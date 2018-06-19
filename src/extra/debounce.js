const debounce = (fn, wait = 100, immediate = false) => (...args) => {
  const obj = this
  let timeout

  const delayed = () => {
    !immediate && fn.apply(obj, args)
    timeout = null
  }

  timeout ? clearTimeout(timeout)
  : immediate ? fn.apply(obj, args) : ''

  timeout = setTimeout(delayed, wait)
}

export default debounce
