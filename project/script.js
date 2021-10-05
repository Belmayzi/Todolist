
let i=0
function addtolist(){
  i++
  let form=document.querySelectorAll('#inputform input');
  let array=Array.from(form);
  let data=array.reduce((acc,input)=>(
    [...acc,input.value]),[]);
  
  let table=document.getElementById("list-table");

  let row=document.createElement('tr');
  row.id=i;
  row.class="animate__backOutLeft";

  
  let task=document.createElement('td');
  task.appendChild(document.createTextNode(data[0]));
  task.id="task"+i;
  
  let time=document.createElement('td');
  time.appendChild(document.createTextNode(data[1]));
  time.id="time"+i;
  
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.class="selecttask";
  checkbox.id=i;
  
  row.appendChild(task);
  row.appendChild(time);
  row.appendChild(checkbox);

  table.appendChild(row);

  document.getElementById('task-input').value='';
  document.getElementById('reminde').value='';

}

function completed(){
  alert("congratulation you have completed your task FINALL!!!")
  let select=document.querySelectorAll('#list-table input');
  let array=Array.from(select);
  let state=array.reduce((acc,input)=>(
    [...acc,input.checked]),[]); 
  let rowid=array.reduce((acc,input)=>(
      [...acc,input.id]),[]); 

  console.log(state);
  console.log(rowid);

  for (let i=0;i<state.length; i++){
    if (state[i]){
      
      let text=document.getElementById("task"+rowid[i]);
      text.style.textDecoration="line-through";
      
    }
  }
}

function deleterow(){

  let select=document.querySelectorAll('#list-table input');
  let array=Array.from(select);
  let state=array.reduce((acc,input)=>(
    [...acc,input.checked]),[]); 
  let rowid=array.reduce((acc,input)=>(
      [...acc,input.id]),[]); 

  console.log(state);
  console.log(rowid);

  for (let i=0;i<state.length; i++){
    if (state[i]===true){
      let row=document.getElementById(rowid[i]);
      row.parentNode.removeChild(row);
    }
  }
  
}



