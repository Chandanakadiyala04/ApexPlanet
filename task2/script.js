 <script>
  document.addEventListener("DOMContentLoaded", function () {
    // === Contact Form Validation ===
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !emailRegex.test(email)) {
          alert("Please enter a valid name and email.");
          e.preventDefault(); // Prevent form submission
        }
      });
    }

    // === To-Do List Functionality ===
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (addTaskButton && taskInput && taskList) {
      addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
          // Create list item
          const li = document.createElement("li");
          li.textContent = taskText;

          // Create delete button
          const removeBtn = document.createElement("button");
          removeBtn.textContent = "❌";
          removeBtn.setAttribute("aria-label", "Remove task");
          removeBtn.onclick = () => li.remove();

          li.appendChild(removeBtn);
          taskList.appendChild(li);

          // Clear input field
          taskInput.value = "";
        }
      });
    }
  });
</script>