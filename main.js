function addNewTask(){
    var list = document.getElementById("list");
     var text = document.getElementById("task_name").value;
     var listItem = document.createElement("li");
     
     if(text.length == 0) {
        alert('O campo não pode ser vazio');
        return
     }

     const textElement = document.createTextNode(text);
     listItem.appendChild(textElement)
        list.appendChild(listItem)
}