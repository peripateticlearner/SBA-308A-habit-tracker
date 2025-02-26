const API_URL = "https://67bac75dfbe0387ca1381f12.mockapi.io/api/v1/habits"; 

async function fetchHabits() {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error("Error fetching habits:", error);
        return [];
    }
}

async function addHabit(title) {
   try {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false })
    });
    return await response.json();
   } catch (error) {
    console.error("Error adding habit:", error);
    return null;
   } 
}

async function updateHabit(id, completed) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed })
        });
        return await response.json();
    } catch (error) {
        console.error(`Error updating habit(ID: ${id}):`, error);
        return null;
        
    }
    
}

async function deleteHabit(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    } catch (error) {
        console.error(`Error deleting habit(ID: ${id}):`, error);
        return null;
    } 
}
