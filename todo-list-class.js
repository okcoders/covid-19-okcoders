
class TodoList {
	constructor(items = []) {
		this.items = items
	}

	addTodo(todoText) {
		const newTodoItem = {
			name: todoText,
			completed: false,
		};
		this.items.push(newTodoItem)
	}


	prettyPrintMyItems() {
		console.log("Here are your items")
		console.log(`You have ${this.items.length} todo items`)
		if (this.items.length > 0) {
			console.log("here is the first one")
			console.log(`${this.items[0].name}`)
		}
	}
}

const myTodoList = new TodoList()
myTodoList.prettyPrintMyItems()
myTodoList.addTodo('learn to code')
myTodoList.addTodo('go outside')
myTodoList.prettyPrintMyItems()