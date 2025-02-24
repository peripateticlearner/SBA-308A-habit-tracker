const API_URL = "https://67bac75dfbe0387ca1381f12.mockapi.io/api/v1/habits"; 

async function fetchHabits() {
    const response = await fetch(API_URL);
    return response.json();
}

async function addHabit(title) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false })
    });
    return response.json();
}

async function updateHabit(id, completed) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed })
    });
    return response.json();
}

async function deleteHabit(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
