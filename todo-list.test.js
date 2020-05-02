const todoListModule = require('./todo-list.js')

const firstResult = todoListModule.addTodoToTodoItems([], 'learn to code')
console.log('correct length', firstResult.length === 1)
console.log('test correct name: ', firstResult[0].name === 'learn to code')
console.log('test correct completed: ', firstResult[0].completed === false)

const secondResult = todoListModule.addTodoToTodoItems(firstResult, 'go outside')
console.log('correct length', secondResult.length === 2)
console.log('test correct name: ', secondResult[0].name === 'learn to code')
console.log('test correct completed: ', secondResult[0].completed === false)
console.log('test correct name: ', secondResult[1].name === 'go outside')
console.log('test correct completed: ', secondResult[1].completed === false)

const removeResult = todoListModule.removeItemFromTodos([{name: 'learn to code', completed: false}, {name: 'go outside', completed: false}], 1)
console.log(removeResult)