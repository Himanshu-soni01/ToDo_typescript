"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this ->>  this is a keyword refers to the current instance of the component class.
var task_name = {};
var c = 0; // declaring a variable for giving unique class for ul_element.
function addTask() {
    var input_task = document.getElementById('input_task');
    var content_space = document.getElementById('content_box');
    if (task_name[input_task.value.trim()] == 1) {
        alert('TASK IS ALREADY PRESENT');
    }
    else if (input_task.value.trim()) {
        var element = document.createElement('ul');
        element.innerHTML = "<li id=\"chkbox\">\n                                <input type=\"checkbox\" id=\"chkbox_id\" onchange='chk_box(this)'>\n                            </li>\n                            <li id=\"task_name\">\n                                ".concat(input_task.value, "\n                            </li>\n\n                            <li class=\"dropdown\">\n                                <select name=\"dropdown\" id=\"dropdown_btn\"\n                                    onchange='dropFunc(this)'>\n                                    <option value=\"To-Do\">To-Do</option>\n                                    <option value=\"In progress\">In progress</option>\n                                    <option value=\"completed\">completed</option>\n                                </select>\n                            </li>\n\n                            <li class=\"delete\" onclick=\"delete_task(this)\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\"\n                                    height=\"25\" fill=\"currentColor\" class=\"bix\"\n                                    viewBox=\"0 0 16 10\">\n                                    <path\n                                        d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\" />\n                                </svg>\n                            </li>");
        element.classList.add("content" + c);
        element.id = 'content';
        task_name[input_task.value.trim()] = 1;
        content_space.appendChild(element);
    }
    else {
        alert("TASK IS NOT INSERTED");
    }
    c += 1;
}
function delete_task(del) {
    var _a;
    var ele = (_a = del.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    var text_name = ele.querySelector('#task_name');
    var text = text_name.innerText;
    task_name[text] = 0;
    del.parentElement.remove();
}
function dropFunc(drop) {
    var _a;
    var ul_ele = (_a = drop.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    console.log("ul_ele->", ul_ele);
    var text_tag = ul_ele.querySelector('#task_name');
    var chkbtn_value = ul_ele.querySelector('#chkbox_id');
    var text = text_tag.innerText;
    if (drop.value == 'completed') {
        chkbtn_value.checked = true;
        text_tag.style.textDecoration = 'line-through';
        task_name[text] = 0;
    }
    else {
        chkbtn_value.checked = false;
        text_tag.style.textDecoration = 'none';
        task_name[text] = 1;
    }
}
function chk_box(chk) {
    var _a;
    var ul_ele = (_a = chk.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    var text_tag = ul_ele.querySelector('#task_name');
    var drop_select = ul_ele.querySelector('#dropdown_btn');
    var chkbtn_value = ul_ele.querySelector('#chkbox_id');
    var text = text_tag.innerText;
    if (chkbtn_value.checked) {
        drop_select.value = 'completed';
        text_tag.style.textDecoration = 'line-through';
        task_name[text] = 0;
    }
    else {
        drop_select.value = 'In progress';
        text_tag.style.textDecoration = 'none';
        task_name[text] = 1;
    }
}
function search() {
    var search_tag = document.getElementById('search_task');
    var text = search_tag.value.toLowerCase().trim();
    var ul_parent = document.getElementById('content_box');
    var all_ul = ul_parent.querySelectorAll('ul');
    for (var i = 0; i <= all_ul.length; i++) {
        var taskElement = all_ul[i].querySelector("#task_name");
        var taskElementValue = taskElement.textContent || taskElement.innerText;
        taskElementValue = taskElementValue.toLowerCase().trim();
        if (taskElementValue.indexOf(text) > -1) {
            all_ul[i].style.display = "";
        }
        else {
            all_ul[i].style.display = "none";
        }
    }
}
