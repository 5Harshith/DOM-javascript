// Parent Node Traversal

  const ul = document.querySelector('ul')
  console.log(ul);
  console.log(ul.parentElement)
  console.log(ul.parentNode)
  console.log(ul.parentElement.parentElement)// 2 level up 

// child Node Traversal 

  const ul2 = document.querySelector('ul')
  console.log(ul2.childNodes)
  console.log(ul2.childElementCount)
  console.log(ul2.firstChild)
  console.log(ul2.lastChild)

  // i i want target to the child 

  ul2.childNodes[1].style.backgroundColor="red";

  console.log(ul2.childNodes.length)
  ul2.childNodes[7].style.backgroundColor="red";

// child node

  const ul3 = document.querySelector('ul')
  console.log(ul3.children)
  console.log(ul3.firstElementChild)
  console.log(ul3.lastElementChild)

//siblings Node Traversal

  const ul4 = document.querySelector('ul')

  console.log(ul4.nextSibling)
  console.log(ul4.previousSibling)
  console.log(ul4.previousElementSibling)
  console.log(ul4.nextElementSibling)

