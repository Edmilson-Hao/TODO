/*====================Starting-Styles====================*/
addEventListener('load', () => {
	if (screen.width < screen.height) {
		const appContainer = document.querySelector('#app-container')
		appContainer.style.margin = '0'
		appContainer.style.position = 'absolute'
		appContainer.style.width = '100%'
		appContainer.style.padding = '0'
	}	
})
/*====================Ending-Styles====================*/


const submitButton = document.querySelector('#submitButton')
const taskArrayList = []

const errorMessage = () => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: "Task Can't Be a Empty String!",
	})
}

const addToList = () => {
	const taskList = document.querySelector('#taskList')
	const listString = taskArrayList.map( task => {
		return `
			<li class="task">
	        	${task.description}
	        </li>
		`
	}).join('')

	console.log(listString)

	taskList.innerHTML = listString
}

const addTask = (description) => {
	const selectDay = document.querySelector('#selectDay')
	const selectHour = document.querySelector('#selectHour')

	let newTask = {
		description: description,
		status: 'waitting',
		dueDay: selectDay.value,
		dueTime: selectHour.value
	}
	taskArrayList.push(newTask)
	
	addToList()

}

submitButton.addEventListener('click', e => {
	const taskDescription = document.querySelector('#taskDescription')

	const newTaskValue = taskDescription.value === '' ? errorMessage() : addTask(taskDescription.value)

	e.preventDefault()
})