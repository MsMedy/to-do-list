


//when button clicked, create a new to do list item
let button = document.getElementById('button');
button.addEventListener('click', handleInput);


function handleInput(event){
    let inputField = document.getElementById('myInput').value;
    document.getElementById("list-item2").insertAdjacentHTML("afterend", `<ul class="list-item"><input type="checkbox" class="checkbox">${inputField}</ul>`);
}

//when checkbox clicked, delete value from node

let button2 = document.getElementById('button2');
button2.addEventListener('click', deleteItem);


function deleteItem(){

    let checkboxes = document.querySelectorAll('.checkbox');
    let listitems = document.querySelectorAll('.list-item');


for(let i=0; i<checkboxes.length; i++){
    if(checkboxes[i].checked == true){
        //remove value from node
        checkboxes[i].remove();
        listitems[i].remove();   
    }
}

}


