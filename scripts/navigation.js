
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
}