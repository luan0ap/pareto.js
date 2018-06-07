export default chunks = (arr, num) => {
  const result = []
  const length = arr.length
  let i = 0

  while (i < length) {
    result.push(arr.slice(i, (i += num)))
  }

  return result
}