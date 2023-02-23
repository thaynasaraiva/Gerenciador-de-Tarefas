// Seleciona o formulário e a lista de tarefas
const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', (e) => {
  e.preventDefault(); // previne o envio do formulário

  // Seleciona os inputs e pega o valor de cada um
  const taskInput = document.querySelector('#task-input');
  const deadlineInput = document.querySelector('#deadline-input');
  const priorityInput = document.querySelector('#priority-input');
  const task = taskInput.value;
  const deadline = deadlineInput.value;
  const priority = priorityInput.value;

  // Cria um objeto com os dados da tarefa
  const taskData = {
    task,
    deadline,
    priority
  };

  // Adiciona a tarefa na lista de tarefas
  addTaskToList(taskData);

  // Limpa os inputs do formulário
  form.reset();
});

// Adiciona a tarefa na lista de tarefas
function addTaskToList(taskData) {
  // Cria um elemento li para a tarefa
  const li = document.createElement('li');

  // Adiciona a classe correspondente à prioridade da tarefa
  li.classList.add(`priority-${taskData.priority}`);

  // Cria um elemento span para o nome da tarefa
  const taskName = document.createElement('span');
  taskName.textContent = taskData.task;

  // Cria um elemento span para a data de prazo da tarefa
  const taskDeadline = document.createElement('span');
  taskDeadline.textContent = taskData.deadline;
  taskDeadline.classList.add('deadline');

  // Adiciona os spans na li
  li.appendChild(taskName);
  li.appendChild(taskDeadline);

  // Adiciona a li na lista de tarefas
  taskList.appendChild(li);
}
