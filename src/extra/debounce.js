const debounce = (fn, wait = 100, immediate = false) => (...args) => {
  let timeout

  const delayed = () => {
    !immediate && fn.apply(this, args)
    timeout = null
  }

  timeout ? clearTimeout(timeout)
  : immediate ? fn.apply(obj, args) : ''

  timeout = setTimeout(delayed, wait)
}

export default debounce
