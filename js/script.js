// dark mode
const darkBtn = document.querySelector('.darkBtn');
const root = document.querySelector(':root');



darkBtn.addEventListener('click', ()=>{
  let body = document.body;
  let bodyStyles = getComputedStyle(body);

  console.log(bodyStyles);
  let background = bodyStyles['79']
  let bgColor = getComputedStyle(body).getPropertyValue(background);
  bgColor.style.setProperty('color', 'red!important');
});
// dark mode















// scroll to top
const scrollToTopBtn = document.querySelector('.scrollToTop');
scrollToTopBtn.style.display='none';
window.addEventListener('scroll', ()=> {
  if (window.scrollY >= 230) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
scrollToTopBtn.addEventListener('click', ()=> {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// scroll to top

// sticky navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', darkFun=()=>{
  if (window.scrollY >= 75) {
    navbar.style.backgroundColor = '#ffffff';
  } else {
    navbar.style.backgroundColor = "";
  }
});

darkFun();



// mobile menu
const menuOpen = document.querySelector('.navbar-toggler');
const menuClose = document.querySelector('.menuCloseBtn');
const mobileMenu = document.querySelector('.mobileMenuBck');

menuOpen.addEventListener('click', ()=>{
  // mobileMenu.classList.add('menuAnimationOpen');
  mobileMenu.classList.remove('d-none');
  mobileMenu.classList.add('d-block');
});
menuClose.addEventListener('click', ()=>{
  mobileMenu.classList.remove('d-block');
  mobileMenu.classList.add('d-none');
});

// mobile menu









// drop down menu
const dropDownBtn = document.querySelector('.click');
const dropDownMenu = document.querySelector('.dropDownMenu');
const wholeDrop = document.querySelector('.wholeDrop');
dropDownMenu.style.display='none';
dropDownBtn.addEventListener('mouseover', ()=>{
  dropDownMenu.classList.add('animationOpen')
  dropDownMenu.style.setProperty("display", "block", "important");
});
wholeDrop.addEventListener('mouseleave', ()=>{
    dropDownMenu.classList.add('animationExit');
    dropDownMenu.classList.remove('animationOpen');
    setTimeout(()=>{
      dropDownMenu.style.setProperty("display", "none", "important");
      dropDownMenu.classList.remove('animationExit');
    }, 200)
});
  // drop down menu
  
  // number count logic
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.test');
  
    const startCounting = (counter, target) => {
      let start = null;
      const duration = 1000;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        counter.innerText = Math.floor((progress / duration) * target);
        if (progress < duration) window.requestAnimationFrame(step);
        else counter.innerText = target;
      };
      window.requestAnimationFrame(step);
    };
  
    const checkCounters = () => {
      const windowHeight = window.innerHeight;
      counters.forEach((counter) => {
        const { top, bottom } = counter.getBoundingClientRect();
        if (top < windowHeight && bottom >= 0) {
          const target = +counter.getAttribute('data-goal');
          startCounting(counter, target);
        }
      });
      
      // Remove the event listener after it has been triggered once
      window.removeEventListener('scroll', checkCounters);
    };
  
    checkCounters(); // run once on load
    window.addEventListener('scroll', checkCounters); // add scroll listener
  });
  
  
  

  // number count logic
  

  // title toggler
  const title01 = document.querySelector('.q01 h1');
  const toggler01 = document.querySelector('.q01 p');
  
  title01.addEventListener('click', ()=> {
    if(toggler01.classList.contains("d-none")) {
      toggler01.classList.remove('d-none');
      title01.classList.add('colorAdd');
      toggler01.classList.add('d-block', 'toggleAnimationOpen');
      } else {
        title01.classList.remove('colorAdd');
        toggler01.classList.remove('d-block', 'toggleAnimationOpen');
        toggler01.classList.add('toggleAnimationClose');
        setTimeout(() => {
          title01.classList.remove('colorAdd');
          toggler01.classList.remove('d-block');
          toggler01.classList.add('d-none');
          toggler01.classList.remove('toggleAnimationClose');
        }, 200);
      }
    });
    
    
    
    const title02 = document.querySelector('.q02 h1');
    const toggler02 = document.querySelector('.q02 p');
    
    title02.addEventListener('click', ()=> {
      if(toggler02.classList.contains("d-none")) {
        title02.classList.add('colorAdd');
        toggler02.classList.remove('d-none');
        toggler02.classList.add('d-block', 'toggleAnimationOpen');
      } else {
        title02.classList.remove('colorAdd');
        toggler02.classList.remove('d-block', 'toggleAnimationOpen');
        toggler02.classList.add('toggleAnimationClose');
        setTimeout(() => {
          title02.classList.remove('colorAdd');
          toggler02.classList.remove('d-block');
          toggler02.classList.add('d-none');
          toggler02.classList.remove('toggleAnimationClose');
        }, 200);
      }
    });
    // title toggler


    // sorting filter
    const allBtn = document.querySelector('.allBtn');
const appBtn = document.querySelector('.appBtn');
const cardBtn = document.querySelector('.cardBtn');
const webBtn = document.querySelector('.webBtn');

const allSection = document.querySelector('.all');
const appSection = document.querySelector('.app');
const cardSection = document.querySelector('.card00');
const webSection = document.querySelector('.web');

allBtn.addEventListener('click', ()=>{
    allBtn.classList.replace('btn-outline-danger','btn-danger')
    appBtn.classList.replace('btn-danger', 'btn-outline-danger')
    cardBtn.classList.replace('btn-danger', 'btn-outline-danger')
    webBtn.classList.replace('btn-danger', 'btn-outline-danger')


    appSection.classList.add('d-none');
    cardSection.classList.add('d-none');
    webSection.classList.add('d-none');
    
    allSection.classList.remove('d-none');
    allSection.classList.add('d-grid');
});

appBtn.addEventListener('click', ()=>{
    appBtn.classList.replace('btn-outline-danger','btn-danger')
    allBtn.classList.replace('btn-danger', 'btn-outline-danger')
    cardBtn.classList.replace('btn-danger', 'btn-outline-danger')
    webBtn.classList.replace('btn-danger', 'btn-outline-danger')


    allSection.classList.add('d-none');
    cardSection.classList.add('d-none');
    webSection.classList.add('d-none');
    
    appSection.classList.remove('d-none');
    appSection.classList.add('d-grid');
});


cardBtn.addEventListener('click', ()=>{
  cardBtn.classList.replace('btn-outline-danger','btn-danger')
  allBtn.classList.replace('btn-danger', 'btn-outline-danger')
  appBtn.classList.replace('btn-danger', 'btn-outline-danger')
  webBtn.classList.replace('btn-danger', 'btn-outline-danger')


  allSection.classList.add('d-none');
  appSection.classList.add('d-none');
  webSection.classList.add('d-none');
  
  cardSection.classList.remove('d-none');
  cardSection.classList.add('d-grid');
});


webBtn.addEventListener('click', ()=>{
    webBtn.classList.replace('btn-outline-danger','btn-danger')
    allBtn.classList.replace('btn-danger', 'btn-outline-danger')
    appBtn.classList.replace('btn-danger', 'btn-outline-danger')
    cardBtn.classList.replace('btn-danger', 'btn-outline-danger')

    appSection.classList.add('d-none');
    cardSection.classList.add('d-none');
    allSection.classList.add('d-none');
    
    webSection.classList.remove('d-none');
    webSection.classList.add('d-grid');
});
// sorting filter    



// clients slider
const slider = document.querySelector('.clients');
let dragging = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e)=>{
  dragging=true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor='grabbing';
});

slider.addEventListener('touchstart', (e)=>{
  dragging=true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', ()=>{
  dragging=false;
  slider.style.cursor='grab';
});

slider.addEventListener('mouseup', ()=>{
  dragging=false;
  slider.style.cursor='grab';
});

slider.addEventListener('touchend', ()=>{
  dragging=false;
});

slider.addEventListener('mousemove', (e)=>{
  if(!dragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX)*1.5; // adjust scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchmove', (e)=>{
  if(!dragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX)*1.5; // adjust scroll speed
  slider.scrollLeft = scrollLeft - walk;
});
