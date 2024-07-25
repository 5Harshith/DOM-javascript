//Event Listeners

//element.addeventListner("click",function)

const boxColors = document.getElementsByClassName('box2');
const btn = document.querySelector('#click1');

function addBgColor(){
  for (let i = 0; i < boxColors.length; i++) {
    boxColors[i].style.backgroundColor = "red";
    console.log("hai")
  }
}

btn.addEventListener('click', addBgColor);


//mouse Hover
function boxHoverDiv(){
  boxHover.style.backgroundColor ='blue'
}
function boxHoverDivout(){
  boxHover.style.backgroundColor =''
}
const boxHover = document.querySelector('.box3');
boxHover.addEventListener('mouseover', boxHoverDiv );
boxHover.addEventListener('mouseout', boxHoverDivout );