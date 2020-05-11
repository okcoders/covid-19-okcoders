function addTodoToTodoItems(todoItems, todoText) {
	const newTodoItem = {
		name: todoText,
		completed: false,
	};
	return [...todoItems, newTodoItem]
}

function removeItemFromTodos(todoItems, index) {
	return todoItems.filter((todo, i) => i !== index)
}

function todosArrayToHtml(todoItems) {
	const htmlListItemsArray = todoItems.map(todo => {
		return `<li>${todo.name}</li>`
	})

	const htmlListItems = htmlListItemsArray.join('')

	const htmlString = `
	  <ol>
	  ${htmlListItems}
	  </ol>
	`
	return htmlString
}

todosArrayToHtml([{name: 'learn to code', completed: false}, {name: 'go outside', completed: false}])

module.exports = {
	addTodoToTodoItems,
	removeItemFromTodos,
	todosArrayToHtml
}