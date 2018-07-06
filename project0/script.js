const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // getElement input value
  let value = document.getElementById('input').value;
  let li = document.createElement('li');
  let checkBox = document.createElement('input');
  // setting type for checkbox
  checkBox.setAttribute('type', 'checkbox');
  // had to create an node due to append it to li
  let node = document.createTextNode(value);
  li.appendChild(node);
  list.appendChild(checkBox).className = classNames.TODO_CHECKBOX;
  list.appendChild(li).className = classNames.TODO_ITEM;
  // getting arr of li tag name
  let arrLi = list.getElementsByTagName('li');
  itemCountSpan.innerHTML= arrLi.length; 

  let arrCheckBox = list.getElementsByTagName('input');
  let count = 0;
  for (let box of arrCheckBox) {
    if (box.checked === false) {
      count += 1
      uncheckedCountSpan.innerHTML = count
    }
  }
}
