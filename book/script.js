var todo = ['as', 'matsu', 'takako'];
for (let i = 0; i < todo.length; i++) {
    let li = document.createElement('li');
    li.textContent = todo[i];
    console.log(li)
    document.getElementById('list-bar').appendChild(li);
    
}