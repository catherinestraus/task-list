const ENTER_KEY_CODE = 13

const taskInput = $('#task')
const taskList = $('#task-list')

taskInput.keypress(function(event) {

  // Only respond to the "enter" key code
  if (event.which !== ENTER_KEY_CODE) {
    return
  }

  // Prevent the cursor from moving down
  event.preventDefault()

  const inputtedTask = taskInput.val()

  if (!inputtedTask) {
    return
  }

  const newTaskItem = $(`<li></li>`)
  newTaskItem.append(`<span class="task-content">${inputtedTask}</span>`)
  newTaskItem.append('<span class="check">☐</span>')
  newTaskItem.append('<span class="delete">🗑️</span>')

  taskList.append(newTaskItem)

  // Clear the task input
  taskInput.val("")

  // Assign event listeners to either delete or check
  const deleteButton = newTaskItem.find(".delete")
  const checkButton = newTaskItem.find(".check")

  deleteButton.click(function() {
    newTaskItem.remove()
  })

  checkButton.click(function() {
    newTaskItem.toggleClass("completed")

    if (newTaskItem.hasClass("completed")) {
      checkButton.text("☑️")
    } else {
      checkButton.text("☐")
    }
  })
})

