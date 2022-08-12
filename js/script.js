const hamburger = document.getElementById('menu-btn');
const bgOverlay = document.getElementById('bg-overlay');
const mobileMenu = document.getElementById('mobile-menu');
let scrollStarted = false;

const counters = document.querySelectorAll('.counter');

hamburger.addEventListener('click', toggleHambuger);
document.addEventListener('scroll', triggerAnimation);

function toggleHambuger() {
  hamburger.classList.toggle('open');
  bgOverlay.classList.toggle('display-overlay');
  document.body.classList.toggle('stop-scroll');
  mobileMenu.classList.toggle('show-menu');
}

function triggerAnimation() {
  const sp = window.scrollY;

  if (sp > 110 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (sp < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

const reset = () => counters.forEach((counter) => (counter.innerHTML = '0'));

const countUp = () =>
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;

      const increment = target / 100;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
