
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
}