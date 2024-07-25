const btn = document.querySelector('.reveal-btn')
const content = document.querySelector('.hidden-container');
const count = 0;
  function revealContent(){
  if(content.classList.contains('display-data'))
  {
    content.classList.remove('display-data')
    btn.innerHTML ='Reveal More'
  }
  else{
    content.classList.add('display-data')
     btn.innerText ="Revealed !!!"
  }
 
}

  // function revealContent(){
  //   content.classList.toggle('display-data');
   
  // }

btn.addEventListener('click', revealContent);