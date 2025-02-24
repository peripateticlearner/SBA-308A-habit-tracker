const habitInput = document.getElementById("habit-input");
const addHabitBtn = document.getElementById("add-habit-btn");
const habitList = document.getElementById("habit-list");

async function renderHabits() {
    habitList.innerHTML = ""; 
    const habits = await fetchHabits();

    habits.forEach(habit => {
        const habitItem = document.createElement("li");
        habitItem.classList.add("habit-item");
        if (habit.completed) {
            habitItem.classList.add("completed");
        }

        habitItem.innerHTML = `
            <span>${habit.title}</span>
            <button onclick="toggleHabit(${habit.id}, ${habit.completed})">✔</button>
            <button onclick="removeHabit(${habit.id})">🗑</button>
        `;
        habitList.appendChild(habitItem);
    });
}

addHabitBtn.addEventListener("click", async () => {
    const title = habitInput.value.trim();
    if (title === "") {
        alert("Please enter a habit.");
        return;
    }

    await addHabit(title);
    habitInput.value = "";
    renderHabits();
});

async function toggleHabit(id, completed) {
    await updateHabit(id, !completed);
    renderHabits();
}

async function removeHabit(id) {
    await deleteHabit(id);
    renderHabits();
}

renderHabits();
