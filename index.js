const currentcontent = document.getElementById('myinput')
const curr = document.querySelector('div');
function add(currentcontent){
    const newcontainer = document.createElement('div');
    const newtask = document.createElement('p');
    const node = document.createTextNode(currentcontent.value); 
    newtask.appendChild(node)

    const newedit = document.createElement('button')
    newedit.id = 'Edit'
    newedit.textContent = 'Edit';
    const newdel = document.createElement('input')
    newdel.id = 'Delete'
    newdel.type = 'checkbox'
    newcontainer.appendChild(newdel)
    newcontainer.appendChild(newtask)
    newcontainer.appendChild(newedit)
    
    newedit.onclick = ()=> {edit(newtask)}
newdel.onclick = ()=> {del(newcontainer)}
curr.appendChild(newcontainer);
}

function edit(newtask){
const editedval = prompt('Enter the task name');
newtask.textContent = editedval;
}

function del(newtask){
newtask.remove()
}
let addbutton = document.getElementById('Add');


addbutton.onclick = ()=> {add(currentcontent)}


