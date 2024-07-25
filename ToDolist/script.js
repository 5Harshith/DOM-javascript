const add_btn =document.querySelector('.add-btn');
const inputValue = document.querySelector('#input-text')
const taskContainer = document.getElementById('task-container');


add_btn.addEventListener('click',function(){
  const result =inputValue.value;
  let task =document.createElement('div')
  task.classList.add('list-item');
  

  let li =document.createElement('li');
  li.innerText =`${inputValue.value}`;
  task.appendChild(li);
  

  let checkButton =document.createElement('button');
  checkButton.innerHTML ='<i class="fa-regular fa-circle-check " ></i>';
  checkButton.classList.add('checktask')
  task.appendChild(checkButton)
  

  let DeleteButton =document.createElement('button');
  DeleteButton.innerHTML ='<i class="fa-solid fa-trash" ></i>';
  DeleteButton.classList.add('deleteTask')
  task.appendChild(DeleteButton)
 
  if(inputValue.value === "")
  {
    alert("Please Enter The Task")
  }
  else{
    taskContainer.appendChild(task)
  }
  inputValue.value=""

  checkButton.addEventListener('click',function(){
    checkButton.parentElement.classList.toggle('checkRed');

  })
  DeleteButton.addEventListener('click',function(e){
    let target =e.target;
    target.parentElement.parentElement.remove()
  })
  
})