

const task = $('#task')
const taskList = $('#task-list')

task.keypress(function(e) {
  if (e.which === 13) {
    // Some logic here

    e.preventDefault()

    const taskContent = task.val()
    console.log("Task content", taskContent)

    task.val("")

    const newTask = $('<li></li>')
    newTask.append(`<span class="task-content">${taskContent}</span>`)
    newTask.append(`<span class="check">⬜</span>`)
    newTask.append(`<span class="delete">🗑</span>`)

    const checkbox = newTask.find(".check")
    checkbox.click(function() {
      if (newTask.hasClass("completed")) {
        checkbox.text("⬜")
      } else {
        checkbox.text("☑️")
      }

      newTask.toggleClass("completed")
    })

    const deletebox = newTask.find(".delete")
    deletebox.click(function() {
      newTask.remove()
    })

    taskList.append(newTask)
  }
})