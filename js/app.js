const addButton = document.querySelector('.btn');
var input = document.querySelector('.input');
const list = document.querySelector('.list');

class item{
    constructor(itemName){
        this.createDiv(itemName)
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.classList.add('btn-edit');
        editButton.classList.add('btn');
        editButton.innerHTML = "Modifier";

        let removeButton = document.createElement('button');
        removeButton.classList.add('btn-supp');
        removeButton.classList.add('btn');
        removeButton.innerHTML = "Supprimer";

        list.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));

    }

    edit(input){
        input.disabled = !input.disabled;
        input.classList.add('item_input_edit');
        if ( input.disabled = input.disabled){
            input.classList.remove('item_input_edit');
        }
    }

    remove(item){
        list.removeChild(item);
    }
}

// new item("car")

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value ="";
    }
}

addButton.addEventListener('click', check);