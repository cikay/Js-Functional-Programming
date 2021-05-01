const stringToObj = (str) => {
  const obj = {}
  for (const char of str) {
    obj[char] = obj[char] + 1 || 1
  }

  return obj
}

const str = 'hello world'

console.log(stringToObj(str))
function getMax(obj) {
  let max = 0
  let maxKey
  for (let key in obj) {
    if (obj[key] > max) {
      maxKey = key
      max = obj[key]
    }
  }
  return maxKey
}

const compose = (a, b) => (data) => a(b(data))

const getMaxCharInStr = compose(getMax, stringToObj)
console.log(getMaxCharInStr(str))
