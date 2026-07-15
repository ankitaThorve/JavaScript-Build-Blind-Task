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
