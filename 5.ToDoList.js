// Storage
let todos = [];

// Add task (push)
function addTask(taskName) {
  if (!taskName || typeof taskName !== "String") {
    console.log(`❌ Please enter a valid task.`);
    return;
  }

  const newTask = {
    id: todos.length + 1,
    task: taskName,
    completed: false,
  };

  todos.push(newTask);
  console.log(`✅ Added: ${taskName}`);
}

// View Tasks (map)
function viewTask() {
  if (todos.length === 0) {
    console.log("No tasks available");
    return;
  }

  console.log(`\n----------To Do List----------`);

  const taskList = todos.map((item) => {
    const status = item.completed ? "✅" : "❌";
    return `${item.id}. ${status} ${item.task}`;
  });

  taskList.forEach((task) => console.log(task));
  console.log("----------\n");
}
