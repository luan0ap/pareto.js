export default (arr, prop) => 
  arr.sort((a, b) => 
    (a[prop] === b[prop]) ? 0 
    : (a[prop] > b[prop]) ?  1 
    : (a[prop] < b[prop]) ? -1 
    : false
  )
