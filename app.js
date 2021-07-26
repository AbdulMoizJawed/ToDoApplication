
var list = document.getElementById('list')


function addtodo(){
    var todo_item = document.getElementById("todo-item")


    // li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)



    // ?delete button 
    var delBtn =document.createElement("button")
    var delText =document.createTextNode("Delete")
    delBtn.appendChild(delText);

    delBtn.setAttribute('class','btn')
    delBtn.setAttribute('onclick','delTask(this)')


// creating edit button
    var editBtn = document.createElement('button');
    var editText =document.createTextNode('Edit')
    editBtn.appendChild(editText)

    editBtn.setAttribute('class','btn')
    editBtn.setAttribute('onclick','editItem(this)')


    li.appendChild(delBtn)
    li.appendChild(editBtn)




    list.appendChild(li)
    todo_item.value = "";
    // console.log(li);
}

function delTask(e){
    e.parentNode.remove();
    // console.log(e.parentNode);
}

function delAll(){
    list.innerHTML = "";
}
 

function editItem(e){
    // console.log(e.parentNode.firstChild.nodeValue);
   e.parentNode.firstChild.nodeValue = prompt('Edit your Task',e.parentNode.firstChild.nodeValue)

 
}