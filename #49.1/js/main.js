'use strict'
const todo = document.querySelector('.todo');

todo.addEventListener('click', function(event) {
    if(event.target.classList.contains('task__checkbox')) {
        const form = event.target.closest('.task');
        const input = form.querySelector('.task__text');

        if(form.classList.contains('task-done')) {
            input.checked = false;
            form.classList.remove('task-done');
        } else {
            input.checked = true;
            form.classList.add('task-done');
        }
    }
    if(event.target.classList.contains('task')) {
        const input = event.target.querySelector('.task__text');
        input.focus();
    }
});

for(let addTask of document.querySelectorAll('.task_add-task')) {
    addTask.addEventListener('submit', function(event) {
        const parentElement = addTask.parentElement;
        let parentElementText = parentElement.querySelector('.task__text');

        const task = document.createElement('form');
        task.className = 'todo__task task';
        task.onsubmit = function() {
            return false;
        }

        const checkbox = document.createElement('div');
        checkbox.className = 'task__checkbox';

        const text = document.createElement('input');
        text.className = 'task__text';
        text.type = 'text';
        text.placeholder = 'Пустая задача';
        text.value = parentElementText.value;
        parentElementText.value = '';

        const closeButton = document.createElement('img');
        closeButton.className = 'task__cross task__cross_close';
        closeButton.src = './img/task__cross.svg';
        closeButton.alt = 'task__cross';
        closeButton.onclick = function() {
            task.remove();
        }

        task.append(checkbox, text, closeButton);
        parentElement.append(task);
        event.preventDefault();
    });
}
