'use strict'
const list = {
    'create a task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
};
const statuseslist = {
    'To Do': 1,
    'In Progress': 2,
    'Done': 3,
}
function changeStatus(task, status) {
    if(String(task) in list) {
        if(status in statuseslist) {
            list[String(task)] = status;
        }
    } else {
        console.log('Error: Such task does not exist');
        return 'Error: Such task does not exist';
    }
}
function addTask(task) {
    if(!(task in list)) {
        list[task] = 'To Do';
    } else {
        console.log('Error: Such task already exists');
        return 'Error: Such task already exists';
    }
    
}
function deleteTask(task) {
    if(task in list) {
        delete list[task];
    } else {
        console.log('Error: Such task does not exist');
        return 'Error: Such task does not exist';
    }
}
function showList() {
    let result = '';
    let isThereSth = false;
    for(let status in statuseslist){
        result += `${status}:\n`;
        isThereSth = false;
        for(let task in list) {
            if(list[task] === status) {
                isThereSth = true;
                result += `"${task}",\n`;
            }
        }
        if(!isThereSth) {
            result += '-\n';
        }
    }
    console.log(result);
    return result;
}