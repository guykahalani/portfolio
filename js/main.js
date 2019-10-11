const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const collapseBtn = document.querySelectorAll('.collapse');

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', () => {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');

    // Set Menu State
    showMenu = false;
  }
});


collapseBtn.forEach( coll => coll.addEventListener('click', (e) => {
  e.target.classList.toggle('active');
  let content = e.target.parentElement;
  content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px"; 
  setTimeout(() => {
    window.scrollBy({ top: content.scrollHeight,behavior: 'smooth'})
  }, 100);
}));
