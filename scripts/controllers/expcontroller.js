window.addEventListener('load',bindEvents);
function bindEvents()
{
    document.getElementById('add').addEventListener('click',add);
    document.getElementById('search').addEventListener('click',search);
    document.getElementById('clear').addEventListener('click',clear);
    document.getElementById('delete').addEventListener('click',deleteExpenses);
    len();
}
function search()
{
    var id=prompt("Enter Id of Expense");
    console.log(id);
    var obj=expop.searchById(id);
    console.log(obj);
    alert(` ID of expense = ${obj.id}
            Name of expense = ${obj.name}
            Cost of expense = ${obj.cost}
            Date of expense = ${obj.date}
            Remarks of expense = ${obj.remarks}
            Photo of expense = ${obj.photo}
            Color of expense = ${obj.color}
            
    `);
}
function deleteExpenses()
{
    expop.removeMarked();
    printExpenses();
    len();

}

function printExpenses(){
    document.querySelector('#expenses').innerHTML = '';
    expop.getExpenses().forEach(printInTable);
    len();
}

function clear()
{
    document.getElementById('id').value="";
  document.getElementById('name').value="";
   document.getElementById('cost').value="51";
    document.getElementById('date').value="";
    document.getElementById('remarks').value="";
   document.getElementById('photo').value="";
    document.getElementById('color').value="#000000";
}
function len()
{
    document.getElementById('total').innerText=expop.len();
    document.getElementById('mark').innerText=expop.mark();
    document.getElementById('unmark').innerText=expop.len()-expop.mark();
}
function add()
{
    var id=document.getElementById('id').value;
    var name=document.getElementById('name').value;
    var cost=document.getElementById('cost').value;
    var date=document.getElementById('date').value;
    var remarks=document.getElementById('remarks').value;
    var photo=document.getElementById('photo').value;
    var color=document.getElementById('color').value;
    var flag= false;
   var obj=expop.add(id,name,cost,date,remarks,photo,color,flag);
   printInTable(obj);
   alert("Succesfully added!!")
   clear();
   len();

}
function printInTable(obj)
{
    var exp=document.getElementById('expenses');
    var tr=exp.insertRow();
    var index=0;
    for (let key in obj)
    {   if (key=='flag')
    {
        continue;
    }
        tr.insertCell(index).innerText=obj[key];
        index++;
    }
    let td = tr.insertCell(index);
    td.appendChild(createIcon(config.icons.edit, edit));
    td.appendChild(createIcon(config.icons.trash, mark));

}
function createIcon(iconClass, fn){
    let iTag = document.createElement('i');
    iTag.className = `${iconClass} ${config.icons.hand}`;
    iTag.addEventListener('click', fn);
    return iTag;
}
function edit(){
    console.log('I am edit');
    var a=this.parentNode.parentNode.firstChild;
    console.log(a.innerText);
    var b=a.nextSibling;
    console.log(b.innerText);
    var c=b.nextSibling;
    console.log(c.innerText);
    var d=c.nextSibling;
    console.log(d.innerText);
    var e=d.nextSibling;
    console.log(e.innerText);
    var f=e.nextSibling;
    console.log(f.innerText);
    var g=f.nextSibling;
    console.log(g.innerText);
   document.getElementById('id').value=a.innerText;
  document.getElementById('name').value=b.innerText;
   document.getElementById('cost').value=c.innerText;
    document.getElementById('date').value=d.innerText;
    document.getElementById('remarks').value=e.innerText;
   document.getElementById('photo').value=f.innerText;
    document.getElementById('color').value=g.innerText;

}
function mark()
{
   var a=this.parentNode.parentNode.firstChild.innerText;
   expop.findById(a);
    this.parentNode.parentNode.classList.toggle ( 'alert-danger');
    len();

}
