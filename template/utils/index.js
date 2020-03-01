export const last = array => array[array.length - 1]

export const lastProperty = obj => obj[Object.keys(obj).length - 1]

export const prop = string => obj => obj[string]

export const equal = x => y => x === y

export const removeById = elementId => ({ id }) => id !== elementId

export const isString = x => typeof x === 'string'

export const isNull = x => x === null

export const isNumber = x => typeof x === 'number'

export const isBoolean = x => typeof x === 'boolean'

export const isObject = x => typeof x === 'object'

export const some = (...fns) => x => fns.some(fn => fn(x))

export const oneOf = (...xs) => y => xs.find(x => y === x)

export const isEmpty = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object

export const tap = x => (y) => {
  x(y)
  return y
}

export const snakeCaseToCamelCase = value => value.replace(/_\w/g, m => m[1].toUpperCase())

export const capitalize = value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()

export const trace = tap(console.log)

export const on = promise => promise.then(response => [response, null]).catch(error => [null, error])

export const objectLength = obj => typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length

export const clamp = (min, max) => value => value < min ? min : value > max ? max : value

// eslint-disable-next-line no-undef
export const devmode = () => !!webpackHotUpdate

export const cleanPathEnd = path => path.substr(-1) === '/' ? path.slice(0, -1) : path

export const cleanPathStart = path => path.charAt(0) === '/' ? path.substr(1) : path

export const cleanPath = (path) => {
  const cache = path.substr(-1) === '/' ? path.slice(0, -1) : path
  return cache.charAt(0) === '/' ? cache.substr(1) : cache
}

export const replaceSegments = (string, index, segment, seperator = '/') => {
  const stringArray = cleanPathStart(string).split(seperator)
  stringArray[index] = segment
  return stringArray.join(seperator)
}

export const echo = key => console.log(`${key}`, key)

export const flattenObj = (obj, prefix = '', res = {}) =>
  Object.entries(obj).reduce((r, [key, val]) => {
    const k = `${prefix}${key}`
    if (typeof val === 'object') {
      flattenObj(val, `${k}-`, r)
    } else {
      res[k] = val
    }
    return r
  }, res)
