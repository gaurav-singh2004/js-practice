const name = "Gaurav"
const repoCount = 12

console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Gaurav-Singh')

console.log(name[0]);
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('o')) 
const newString = gameName.substring(0,6).toLocaleUpperCase()
console.log(newString)
const anotherString = gameName.slice(-12,-4)
console.log(anotherString)
const newStringOne = "    Hello World   "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimStart())
console.log(newStringOne.trimEnd())

const url = "https://gaurav.com/gaurav%20singh"
console.log(url)
console.log(url.replace('%20','-'))
console.log(url.includes('singh'))

const splitName = "Gaurav-Singh-21"
console.log(splitName.split())
console.log(splitName.split('-'))