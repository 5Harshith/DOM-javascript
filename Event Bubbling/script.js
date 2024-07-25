//Event Probagation

window.addEventListener("click",function(){
  console.log("window");
},false)
document.addEventListener("click",function(){
  console.log("Document");
},false)
document.querySelector('.div2').addEventListener("click",function(){
  console.log("div 2")
},false)
document.querySelector('.div1').addEventListener("click",function(){
  console.log("div 1")
},false)
document.querySelector('button').addEventListener("click",function(e){
  console.log(e.target.innerText ="clicked") //from the events we can get the value(e event object )
  console.log(e)
},false)

//by default it will be in false 
// if we make pass true then it will follow the
//this is having the boolen value true this parameter include wheater we need
//event capture or event bubbling 
  /*window
  Document
  div 2
  div 1 
  button 
  */

  // to make the bubbling face we need to make all the parameter value false
  /*  document.querySelector('.div1').addEventListener("click",function(){
      console.log("div 1")
    },false) 
      button
      div 1 
      div 2
      Document
    */

// stop bubling 
// document.querySelector('.div2').addEventListener("click",function(e){
//   e.stopPropagation();
// },true)

// if we want start from the elemenmt we clicked 
document.querySelector('.div1').addEventListener("click",function(){
  console.log("div 1")
},{once:true})