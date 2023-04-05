let taskInput =document.getElementById("task-input");
let addButton=document.getElementById("add-button");
let tabs=document.querySelectorAll(".task-tabs div")
let taskList=[];

addButton.addEventListener("click",addTask);

for(let i=1;i<tabs.length; i++){
    tabs[i].addEventListener("click",function(event){filter(event)})
}
console.log(tabs);

function filter(event){
    console.log("클릭됌");
}
function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

function addTask(){

    let task={
        id:randomIDGenerate(),
        taskContent:taskInput.value,
        isComplete:false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}
function render(){
    let resultHTML="";
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].isComplete==true){
            resultHTML+=`<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>    
               <div>
                   <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                   <button onclick="deleteTask('${taskList[i].id}')">delete</button>
               </div>
           </div>`;
        }else{
            resultHTML+=`<div class="task">
           <div>${taskList[i].taskContent}</div>    
             <div>
                 <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                 <button onclick="deleteTask('${taskList[i].id}')">delete</button>
             </div>
           </div>`;
        }
        
    }

    document.getElementById("task-board").innerHTML=resultHTML;
    
    
}
function toggleComplete(id){
    console.log("id",id);
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}
function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
}