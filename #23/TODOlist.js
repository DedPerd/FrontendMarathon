'use strict'
const list = [ 
    { 
        name: 'create a post', 
        status: 'To Do',
        priority: 'low'  
    }, 
    { 
        name: 'create a task', 
        status: 'Done', 
        priority: 'high'  
    },
    { 
        name: 'make a bed', 
        status: 'In Progress', 
        priority: 'high'  
    }
];
const statuseslist = ['To Do', 'In Progress', 'Done'];
const prioritylist = ['high', 'low']

function findTaskIndex(taskName) {
    return list.findIndex(item => item.name === taskName);
}
function Task(taskName, status, priority) {
        this.name = taskName; 
        this.status = status; 
        this.priority = priority;
}
function createTask(taskName, status = 'To Do', priority = 'low') {
    const index = findTaskIndex(taskName);
    if(index === -1) {
        if(statuseslist.includes(status) && prioritylist.includes(priority)) {
            list.push(new Task(taskName, status, priority));
        } else {
            console.log('Error: invalid argument');
        }
    } else {
        console.log('Error: such task already exist');
    }
}
function deleteTask(taskName) {
    const index = findTaskIndex(taskName);
    if(index !== -1) {
        list.splice(index, 1);
    } else {
        console.log('Error: such task does not exist');
    }
}
function changeStatus(taskName, status) {
    const taskIndex = findTaskIndex(taskName);
    const statusIndex = statuseslist.indexOf(status);
    if(taskIndex !== -1) {
        if(statuseslist.includes(status)) {
            list[taskIndex].status = statuseslist[statusIndex];
        } else {
            console.log('Error: invalid argument');
        }
    } else {
        console.log('Error: such task does not exist');
    }
}
function changePriority(taskName, priority) {
    const taskIndex = findTaskIndex(taskName); 
    if(prioritylist.includes(priority)) {
        list[taskIndex].priority = priority;
    } else {
        console.log('Error: invalid argument');
    }
}
function showListBy(sortBy = 'status') {
    let result = '';
    let isThereSth = false;
    switch(sortBy) {
        case 'status':
            for(let key of statuseslist) {
                result += `${key}:\n`;
                isThereSth = false;
                list.forEach(item => {
                    if(item.status === key) {
                        result += `  ${item.name},\n`;
                        isThereSth = true;
                    }
                });
                if(!isThereSth) {
                    result += '  -\n';
                };
            }        
            break;
        case 'priority':
            for(let key of prioritylist) {
                isThereSth = false;
                result += `${key}:\n`;
                list.forEach(item => {
                    if(item.priority === key) {
                        result += `  ${item.name},\n`;
                        isThereSth = true;
                    }
                });
                if(!isThereSth) {
                    result += `  -\n`;
                }
            }
            break;
        default:
            console.log('Error: invalid argument');
            break;
    }
    console.log(result);
}



