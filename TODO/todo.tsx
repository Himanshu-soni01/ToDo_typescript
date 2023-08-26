export {} // this is a typeScript feature to create an "empty" export statement to ensure this file is treated as a module.

// this ->>  this is a keyword refers to the current instance of the component class.

var task_name:{} = {}
var c = 0  // declaring a variable for giving unique class for ul_element.


function addTask(){
    var input_task = document.getElementById('input_task') as HTMLInputElement;
    var content_space = document.getElementById('content_box') as HTMLDivElement;

    if(task_name[input_task.value.trim()]==1){
        alert('TASK IS ALREADY PRESENT')
    }else if (input_task.value.trim()){
        let element = document.createElement('ul')
        element.innerHTML = `<li id="chkbox">
                                <input type="checkbox" id="chkbox_id" onchange='chk_box(this)'>
                            </li>
                            <li id="task_name">
                                ${input_task.value}
                            </li>

                            <li class="dropdown">
                                <select name="dropdown" id="dropdown_btn"
                                    onchange='dropFunc(this)'>
                                    <option value="To-Do">To-Do</option>
                                    <option value="In progress">In progress</option>
                                    <option value="completed">completed</option>
                                </select>
                            </li>

                            <li class="delete" onclick="delete_task(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25"
                                    height="25" fill="currentColor" class="bix"
                                    viewBox="0 0 16 10">
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </li>`
        element.classList.add("content"+c);
        element.id = 'content';
        task_name[input_task.value.trim()] = 1;
        content_space.appendChild(element);

    }else{
        alert("TASK IS NOT INSERTED")
    }

    c += 1;

}

function delete_task(del){
    let ele = del.parentElement?.parentElement as HTMLUListElement;
    let text_name = ele.querySelector('#task_name') as HTMLLIElement;
    let text = text_name.innerText;
    task_name[text] = 0;

    del!.parentElement!!.remove();
}

function dropFunc(drop){
    let ul_ele = drop.parentElement?.parentElement as HTMLUListElement;
    console.log("ul_ele->",ul_ele);
    let text_tag = ul_ele.querySelector('#task_name') as HTMLLIElement;
    let chkbtn_value = ul_ele.querySelector('#chkbox_id') as HTMLInputElement;
    let text = text_tag.innerText;

    if(drop.value == 'completed'){
        chkbtn_value.checked = true;
        text_tag.style.textDecoration = 'line-through';
        task_name[text] = 0;
    }
    else{
        chkbtn_value.checked = false;
        text_tag.style.textDecoration = 'none';
        task_name[text] = 1;
    }
}

function chk_box(chk){
    let ul_ele = chk.parentElement?.parentElement as HTMLUListElement;
    let text_tag = ul_ele.querySelector('#task_name') as HTMLLIElement;
    let drop_select = ul_ele.querySelector('#dropdown_btn') as HTMLSelectElement;
    let chkbtn_value = ul_ele.querySelector('#chkbox_id') as HTMLInputElement;
    let text = text_tag.innerText;   
        
    if(chkbtn_value.checked){
        drop_select.value = 'completed';
        text_tag.style.textDecoration = 'line-through';
        task_name[text] = 0;   
    }
    else{
        drop_select.value = 'In progress';
        text_tag.style.textDecoration = 'none';
        task_name[text] = 1;
    }
}

function search(){
    let search_tag = document.getElementById('search_task') as HTMLInputElement;
    let text = search_tag.value.toLowerCase().trim();
    let ul_parent = document.getElementById('content_box') as HTMLInputElement;   
    let all_ul = ul_parent.querySelectorAll('ul');

    for (let i = 0; i <= all_ul.length; i++) {
        var taskElement = all_ul[i].querySelector("#task_name") as HTMLLIElement;
        var taskElementValue = taskElement.textContent || taskElement.innerText;
        taskElementValue = taskElementValue.toLowerCase().trim();        

        if (taskElementValue.indexOf(text) > -1) {
            all_ul[i].style.display = "";
        } else {
            all_ul[i].style.display = "none";
        }
    }
}