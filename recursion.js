
const basicArray = ['test', 'learn to code', 'go outside']

function nonRecursiveLength(array) {
	var length = 0
	for(var i = 0; i < array.length; i++) {
		length++
	}
	return length
}

function recursiveLength(array, currentLength = 0) {
	if (array.length === 0) return currentLength
	array.pop()
	return recursiveLength(array, currentLength + 1)
}

console.log(nonRecursiveLength(basicArray))
console.log(recursiveLength(basicArray))