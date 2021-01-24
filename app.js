const submitButton = document.querySelector('#submitButton')

const errorMessage = () => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: "Task Can't Be a Empty String!",
	})
}

const addTask = () => {
	cons ul = document.querySelector('#tasks')
}

submitButton.addEventListener('click', e => {
	const task = document.querySelector('#task')

	const newTask = task === '' ? addTask() : errorMessage()

	e.preventDefault()
})