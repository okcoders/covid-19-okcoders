

const four = 4
const boolExample = true
const stringExample = 'test'
const arrayExample = []
const objectExample = {firstName: 'Zach'}
objectExample.lastName = 'Mays'

const newObject = {...objectExample, lastName: 'Mays'}

function addTwo(number) {
	return number + 2
}

const six = addTwo(four)

// console.log(four, six)

// -----------------

const emptyTodos = []

function addTodo(items, newTodoText) {
	const newTodo = {name: newTodoText}
	return [...items, newTodo]
}

const updatedTodos = addTodo(emptyTodos, 'learn to code')
// console.log(emptyTodos, updatedTodos)


// const numbers = [1, 3, 6, 9]
// const numbersPlusTwo = numbers.map(n => n + 2)
// console.log(numbers, numbersPlusTwo)

let numbers = []
for(let i = 1; i <= 100; i++) {
	numbers.push(i)
}

const evenNumbers = numbers.filter(n => n % 2 === 0)
const oddNumbers = numbers.filter(n => n % 2 !== 0)

console.log(evenNumbers)
console.log(oddNumbers)

// for(let i = 0; i < numbers.length; i++) {
// 	numbers[i] = numbers[i] + 2
// }

// numbers.forEach((n, i) => {
// 	numbers[i] = n + 2
// })
// numbers.forEach(function(n) {return n + 2})
// numbers.forEach(addTwo)


// const numbersAddedByTwo

// const moreNumbers = [...numbers, 14]

