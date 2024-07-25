/*=== Dom Manipulation==== */

// getElementByid()
  const title=document.getElementById('main-heading');
  console.log(title);
  title.style.color ="red";

//getelementByclass()
  const listItems =document.getElementsByClassName('list-items')
  console.log(listItems)
  // listItems.style.fontSize="3rem" // this is not possible we need to loop through each element in the list
  for( i=0;i<listItems.length;i++)
  {
    listItems[i].style.fontSize="2rem";
  }

//getElementby tag

  const tag =document.getElementsByTagName('li')
  console.log(tag)

//querySelector()
  const container=document.querySelector('#main-heading');
  console.log(container)
  // container.innerHTML="thokkottu";

//query selecorAll()
  const div_container =document.querySelectorAll('div');
  console.log(div_container);

/*=== creating element === */
  console.log("creating element")
  const ul = document.querySelector('ul')
  console.log(ul)
  
  const li = document.createElement('li');
  /*=== adding element=== */
  ul.append(li);

  /*=== modifing element === */
  const firstList=document.querySelector('.list-items');
  console.log(firstList.innerHTML); 
  /*it will give all the html element , not use must because not safe in the
  browser , any one can change the js code.*/

  console.log(firstList.textContent);// it will show only the text content not show the attribute tag inside element.
  
  console.log(firstList.innerText);// we use this tag to alter or insert the value in the list

  li.innerText ="Naruto";
  // modifi=ying  Attribute and Class
  

  // Attribute
    //if i want add a id to a element then, i will take the above li to show
    li.setAttribute('id','main-heading');
    //to remove id
    li.removeAttribute('id')
    //to get the id of the element 
    const heading =document.querySelector('#main-heading');
    console.log(heading.getAttribute('id'));
 
    //class 
      li.classList.add("list-items");
      console.log(li.classList.contains('list-items')); // returns true or fasle
    
    //Remove Element - i will remove the li which is added above
    li.remove(); 
   

