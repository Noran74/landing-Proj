/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/ 
// global variables used at the begining of project
//start global variables

const navBar=document.getElementById('navbar__list');
const sections=document.querySelectorAll('section');

//end global variables

/**
 * End Global Variables
 * Start Helper Functionss
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navigation bar by creating new elements

function makeList(){
    for (const section of sections) {// using For loop to create new elements "li"

const lists=document.createElement('li');
const sectionDataNav=section.getAttribute('data-nav');
const sectionID=section.getAttribute('id')

lists.innerHTML=`<a href="${sectionID}" class="menu__link">${sectionDataNav}</a>`;
navBar.appendChild(lists);


}

}
makeList();

// using click event to scroll into viewport and make scrolling so smooth

function scrollTo(){
sections.forEach(section=>{
const links=document.querySelectorAll(".menu__link")//select menu__link in looping
links.forEach(link=>{
console.log(link.getAttribute('section.dataset.nav'));
link.addEventListener('click',event=>{//using addEventListener to scroll into defined section
event.preventDefault();

if(link.textContent===section.getAttribute('data-nav')){
section.scrollIntoView({behavior:'smooth',block:'start'})//using ScrollIntoView to make scrolling so smooth
}
})


})
})

}

scrollTo();//end starter function


//Add class 'active' to section when near top of viewport

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Set sections as active

 // add scroll event to the window

//using onscroll event for highlighting active class on scrolling

onscroll=function(){
    const navLinks=document.querySelectorAll('a');//select to all anchors
    const scrollPosition=window.scrollY//determine the scrollY
    
    sections.forEach(section=>{//using sections for loop
        const sectionName=section.getAttribute('data-nav')
const scrollTop=section.offsetTop-200;// make variables for determining top and end of viewPort
const scrollHeight=section.clientHeight;
//using if condition for adding and removing active class from sections and anchors
if(scrollPosition>=scrollTop && scrollPosition<scrollHeight+scrollTop){
    section.classList.add('your-active-class');
   
//using looping for each link to add active link
navLinks.forEach(link=>{
link.classList.remove('active-link')
if(link.textContent===sectionName){
    link.classList.add('active-link')// addin active-class
}

})

}  
    
else{section.classList.remove('your-active-class')}
   
 
    })
    
}

//end active class



