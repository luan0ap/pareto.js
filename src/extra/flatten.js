export default function flatten (array) {
 return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
} 