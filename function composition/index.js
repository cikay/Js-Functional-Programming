const compose = (...args) => (num) => {
  let result = args[args.length - 1](num)
  for (let i = args.length - 2; i >= 0; i--) {
    let func = args[i]
    result = func(result)
  }

  return result
}

const composeFunctinal = (...fns) => (arg) => {
  return fns.reverse().reduce((value, func) => {
    return func(value)
  }, arg)
}

const addedTwo = (num) => num + 2
const multipleTwo = (num) => num * 2
const addedFive = (num) => num + 5
const withFor = 'with for'
const withFunctional = 'with functional'
console.time(withFor)
const composed = compose(addedFive, multipleTwo, addedTwo)
const resultWithFor = composed(1)
console.log(resultWithFor)
console.timeEnd(withFor)

console.time(withFunctional)
const composedFunctinal = composeFunctinal(addedFive, multipleTwo, addedTwo)
const resultWithFunctional = composedFunctinal(1)
console.log(resultWithFunctional)
console.timeEnd(withFunctional)
