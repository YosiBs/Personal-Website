<<<<<<< HEAD

const sidebarBtnElem = document.querySelectorAll('.navigation-button');

highlightSectionButton(sidebarBtnElem);

sidebarBtnElem.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.querySelector('.nav-btn-text').innerHTML;
    console.log(`the button ${buttonText} was pressed `);
    scrollToSection( buttonText.toLowerCase());
  })
})


function scrollToSection(sectionId){
  console.log(sectionId);
  const section = document.getElementById(`${sectionId}-section`);
  if(section) {
    section.scrollIntoView({behavior: 'smooth'});
  }
}


function highlightSectionButton(sidebarBtnElem) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    sidebarBtnElem.forEach(button => {
      const targetId = button.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      const sectionTop = targetSection.offsetTop;
      const sectionBottom = sectionTop + targetSection.offsetHeight;
      if(scrollPosition >= sectionTop - 20 && scrollPosition < sectionBottom) {
        button.classList.add('highlighted');
      }else{
        button.classList.remove('highlighted');
      }
    });
  });
=======

const sidebarBtnElem = document.querySelectorAll('.navigation-button');
//console.log();

console.log(sidebarBtnElem);



sidebarBtnElem.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.querySelector('.nav-btn-text').innerHTML;
    console.log(`the button ${buttonText} was pressed `);
    scrollToSection( buttonText.toLowerCase());
    
  })
})




function scrollToSection(sectionId){
  console.log(sectionId);
  const section = document.getElementById(`${sectionId}-section`);
  if(section) {
    section.scrollIntoView({behavior: 'smooth'});
  }
>>>>>>> 90f0cfd1b48da0104cc4db6a29d00b369cbf2e39
}