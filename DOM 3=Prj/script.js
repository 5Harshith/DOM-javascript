const open = document.getElementById('open-btn')
const modal = document.getElementById('modal-container')
const close = document.getElementById('close-btn');

 /*   open.addEventListener('click',function(){
      if(modal.classList.contains('hidden-card'))
      {
        modal.classList.remove('hidden-card')
      }
      else{
        modal.classList.add('hidden-card')
      }
    })
    close.addEventListener('click',function(){
      modal.classList.add('hidden-card')
      
    })
    console.log(close) */
// we can easy toogle with style in js lets try


open.addEventListener('click',function(){
 modal.style.display ="block"
 open.style.display="none"
})
close.addEventListener('click',function(){
  modal.style.display ="none"
  open.style.display="block"
 })
 window.addEventListener('click',function(e){
 console.log(e.target)
 if(e.target === modal)
 {
  modal.style.display="none"
   open.style.display="block"
 }

 })
 

