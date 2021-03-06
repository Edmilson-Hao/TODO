/*====================Starting-Styles====================*/
addEventListener('load', () => {
	if (screen.width < screen.height) {
		const appContainer = document.querySelector('#app-container')
		appContainer.style.margin = '0'
		appContainer.style.position = 'absolute'
		appContainer.style.width = '100%'
		appContainer.style.padding = '0'

		const formChildren = Array.from(document.querySelector("#addNewTask").children)

		formChildren.forEach( child => {
			child.style.width = '100%'

		})
	}
})
/*====================Ending-Styles====================*/


const submitButton = document.querySelector('#submitButton')
const taskArrayList = []
const taskDescription = document.querySelector('#taskDescription')
const selectDay = document.querySelector('#selectDay')
const selectHour = document.querySelector('#selectHour')

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
		const randomId = 'task'+Math.floor(Math.random()*1000000)
		return `
			<li class="task" id='${randomId}'>
				<input type="checkbox">
	        	<span>${task.description}</span>
	        	<i class="far fa-trash-alt" onclick='removeTask(${randomId})'></i>
	        </li>
		`
	}).join('')

	taskList.innerHTML = listString
}

const addTask = () => {

	let newTask = {
		description: taskDescription.value,
		dueDay: selectDay.value,
		dueHour: selectHour.value,
	}

	taskArrayList.push(newTask)

	taskDescription.value = ''
	selectDay.value = ''
	selectHour.value = ''
	
	addToList()

}

const checkInputs = () => {
	if(taskDescription.value === "" || selectDay.value === '' || selectHour.value === '') return false

	return true
}

submitButton.addEventListener('click', e => {
	const newTaskValue = checkInputs() ? addTask() : errorMessage()
	e.preventDefault()
})

const removeTask = id => {
	id.remove()
}