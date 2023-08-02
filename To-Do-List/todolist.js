let heading=document.createElement("p");
heading.textContent="TO-DO-LIST";
heading.style.textAlign="center";
document.body.appendChild(heading);

let todoContainer=document.createElement("div");
todoContainer.classList.add("to-do-container");
document.body.appendChild(todoContainer);

let todoheading=document.createElement("p");
todoheading.textContent="TO-DO's";
todoContainer.appendChild(todoheading);

let inputbox=document.createElement("input");
inputbox.type="text";
inputbox.id="addTask"
inputbox.placeholder="What needs to be done?"
todoContainer.appendChild(inputbox);

let addbutton=document.createElement("button");
addbutton.textContent="ADD";
addbutton.id="addButton";
todoContainer.appendChild(addbutton);

let mytaskheading=document.createElement("p");
mytaskheading.textContent="My Tasks";
todoContainer.appendChild(mytaskheading);


let todos=[];

let taskCount=todos.length;

    function onDeleteToDo(taskid){
        let taskelement=document.getElementById(taskid);
        todoContainer.removeChild(taskelement);
    }


    function onStatusChanged(checkboxid,labelid){
        let checkboxelement=document.getElementById(checkboxid);
        let labelelement=document.getElementById(labelid);
        // if(checkboxelement.checked){
        //     labelelement.classList.add("checked");
        // }
        // else{
        //     labelelement.classList.remove("checked");
        // }

        labelelement.classList.toggle("checked");
    }
   

    function createAndappend(item){
        let checkboxid="checkbox"+item.id;
        let labelid="label"+item.id;
        let taskid="task"+item.id;
        
        let taskcontainer=document.createElement("div");
        taskcontainer.classList.add("task-container");
        taskcontainer.id=taskid;
        todoContainer.appendChild(taskcontainer);

        let checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.id=checkboxid;
        checkbox.classList.add("checkbox");
        taskcontainer.appendChild(checkbox);
        checkbox.onclick=function(){
            onStatusChanged(checkboxid,labelid);
        }

        let labelcontainer=document.createElement("div");
        labelcontainer.classList.add("label-container");
        taskcontainer.appendChild(labelcontainer);

        let label=document.createElement("label");
        label.setAttribute("for",checkboxid);
        label.textContent=item.text;
        label.id=labelid;
        labelcontainer.appendChild(label);

        let delicon=document.createElement("img");
        delicon.src="delicon.png";
        delicon.onclick=function(){
            onDeleteToDo(taskid);
        }
        labelcontainer.appendChild(delicon);

    }
    function onAddTask(){
        let userinput=document.getElementById("addTask");
        let userinputValue=userinput.value;
        if(userinputValue===""){
            alert("Enter Valid Text");
            return;
        }
        taskCount=taskCount+1;
        let newTask={
            text:userinputValue,
            id:taskCount,

        }
        createAndappend(newTask);
        userinput.value="";
    }
    let addToDoButton=document.getElementById("addButton");
    addToDoButton.onclick=function(){
        onAddTask();
    }


for(let item of todos){
    createAndappend(item);
}






