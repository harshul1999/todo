// Button to add the item in list
let addbutton = document.getElementById("Add");

// Ul
let ul = document.getElementById("do");

// Checkbox

addbutton.onclick = addItems;
function addItems(){
    
    var item = document.getElementById("myInput").value;
    var list = document.createElement("li");
    ul.appendChild(list);
    list.innerHTML = item;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style = "margin-left:20px";  
    // var list = this.parentElement;
    list.appendChild(checkbox);


    // var check = document.createElement("input");
    // check.setAttribute("type", "checkbox");
    // check.setAttribute("style", "margin-left:20px");
  

    var deleteBtn = document.createElement("button");
    deleteBtn.type = "Button";
    deleteBtn.id = "delBtn";
    deleteBtn.style.height = "30px";
    deleteBtn.style.width = "100px";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style = "margin-left:20px";

    // deleteBtn.style.backgroundColor = "Black";
    // deleteBtn.style.color = "white";

    list.appendChild(deleteBtn);

  checkbox.addEventListener("change", checkedItem);
  
function checkedItem(){
  document.getElementById("ding").play();
  var checkBox = document.getElementById("checkbox");
  list.style.textDecoration = "line-through";
  ul.appendChild(list);

  if (checkbox.checked == false){
    list.style.textDecoration = "none";
  }
}

deleteBtn.onclick = function () {
  var list = this.parentElement;
  list.style.display = "none";
};

list.appendChild(deleteBtn);

}