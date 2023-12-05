const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const toggleThemeButton = document.getElementById("toggleTheme");
let darkMode = false;

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
});

function addTask(taskText) {
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteButton" aria-label="Șterge sarcina">❌</button>
    `;
  taskList.appendChild(taskItem);

  taskItem
    .querySelector(".deleteButton")
    .addEventListener("click", function () {
      taskItem.remove();
    });

  taskItem.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });
}

toggleThemeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  darkMode = !darkMode;
  toggleThemeButton.textContent = darkMode ? "☀️" : "🌙";
});
