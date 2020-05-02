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
	var htmlString = "";
	htmlString += "<ol>";
	for (var i = 0; i < todoItems.length; i++) {
		const item = todoItems[i];
		const itemName = item ? item.name : "empty";
		htmlString +=
		"<li " + 'onclick="removeItemFromTodos(' + i + ')"' + ">";
		htmlString += itemName;
		htmlString += "</li>";
	}
	htmlString += "</ol>";
	return htmlString;
}

module.exports = {
	addTodoToTodoItems,
	removeItemFromTodos,
	todosArrayToHtml
}