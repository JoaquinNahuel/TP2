document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
});

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => displayUsers(users))
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Nombre:</strong> ${user.name}</p>
            <p><strong>Nombre de Usuario:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Sitio Web:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <button onclick="fetchTasks(${user.id})">Ver Tareas</button>
        `;
        userList.appendChild(userDiv);
    });
}

function fetchTasks(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(tasks => displayTasks(tasks))
        .catch(error => console.error('Error fetching tasks:', error));
}

function displayTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${task.completed ? 'completed' : 'pending'}`;
        taskDiv.innerHTML = `
            <p><strong>ID:</strong> ${task.id}</p>
            <p><strong>Título:</strong> ${task.title}</p>
            <p><strong>Completada:</strong> ${task.completed ? 'Sí' : 'No'}</p>
        `;
        taskList.appendChild(taskDiv);
    });
}
