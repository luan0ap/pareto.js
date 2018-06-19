export default function get(object, path, defaultValue = undefined) {
  if (path) {
    const pathSplitted = path.split('.')
    const property = pathSplitted[0]
    const findProperty = object[property]
    if (findProperty && !path.includes('.')) {
      return findProperty
    }
    const newPath = pathSplitted.slice(1, pathSplitted.length).join('.')
    return get(findProperty, newPath, defaultValue)
  }
  return defaultValue
}
