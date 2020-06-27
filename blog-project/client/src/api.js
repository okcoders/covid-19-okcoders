
export async function createPost(data = {}) {
	const response = await fetch('/posts', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data)
	});
	return response.json();
}

export async function getPosts() {
	const response = await fetch('/posts')
	return response.json();
}

export async function deletePost(id) {
	const response = await fetch(`/posts/${id}`, {method: 'DELETE'})
	return response.json()
}