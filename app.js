
getTasks()
function deleteTask(title) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  if (tasks === null){
    tasks = [];
  }
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p><i class="fas fa-tasks"></i> ${title} - <i class="fas fa-sticky-note"></i> ${description}
          <a href="#" onclick="deleteTask('${title}')" class="delete-btn btn btn-danger ml-5 font-weight-bold"><i class="fas fa-trash-alt"></i> Delete</a>
          <a href="#" onclick="deleteTask('${title}')" class="delete-btn btn btn-success ml-5 font-weight-bold"><i class="fas fa-check-square"></i> Complete</a>
          </p>
        </div>
      </div>`;
  }
}

var taskField = document.getElementById('title');
var descriptionField = document.getElementById('description');
var errorText = document.getElementById('error');
error.style.color = 'red';  

var form = document.getElementById('formTask');
    form.addEventListener('submit', function(event){
      event.preventDefault();
      var eMessage = [];
      if(taskField.value == null || taskField.value == ''){
        eMessage.push('Write the task\'s title!');
      }
      if(descriptionField.value == null || descriptionField.value == ''){
        eMessage.push('Write the task\'s description!');
      }


      errorText.innerHTML = eMessage.join('<br>');


      if(eMessage.length === 0){
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
      
        let task = {
          title,
          description
        };
      
        if(localStorage.getItem('tasks') === null) {
          let tasks = [];
          tasks.push(task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
          let tasks = JSON.parse(localStorage.getItem('tasks'));
          tasks.push(task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      
        getTasks();
        document.getElementById('formTask').reset();
      }
    });
