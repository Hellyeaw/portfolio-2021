// cursor
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const cursor3 = document.querySelector('.cursor3');
const cursorT = document.querySelector('.cursor-text');
const footer = document.querySelector('footer');
const nextPageWeb = document.querySelector('.game-footer-text');
const nextPagePixel = document.querySelector('.web-footer-text');
const logo = document.querySelector('.logo');
const socialBtn = document.querySelector('#social');
const socialLinks = document.querySelector('div.social-links');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('cursorinnerhover');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('cursorinnerhover');
});

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor2.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor3.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursorT.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

footer.addEventListener('mouseover', function () {
  cursorT.innerHTML = footer.getAttribute('data-hover');
});

footer.addEventListener('mouseout', function () {
  cursorT.innerHTML = '';
});

// Nav bar
const openBtn = document.querySelector('#openBtn');
const navOverlay = document.querySelector('#scroll-nav');
const closeBtn = document.querySelector('#closeBtn');
const navLink = document.querySelectorAll('#nav-link-close');
const bodyF = document.querySelectorAll('#body-f');

openBtn.onclick = function () {
  navOverlay.style.height = '100vh';
};

closeBtn.onclick = function () {
  navOverlay.style.height = '0vh';
};

function closeTab()
{
  navOverlay.style.height = '0vh';
}

// logo
logo.addEventListener('click', () => {
  window.open('index.html', '_self');
});

// contact Btn
if (socialBtn != null)
{
  socialBtn.addEventListener('click', () => {
    socialLinks.classList.toggle('change');
  });
}

// timer Text;
var words = ['Have a Chat', 'Have a Coffee', 'Collab'];
var index = 0;
const textDisplay = document.querySelector('#words');

window.onload = (changeText());

function changeText() {
  setInterval(myText, 1500);
}

function myText() {
  if (textDisplay != null) {
    textDisplay.textContent = words[index];
    index++;
    if (index === words.length) { index = 0;}
  }
}

// element transitions
var scroll = window.requestAnimationFrame ||
   function (callback) { window.setTimeout(callback, 1000 / 60); };

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();
function isElementInViewport(el) {
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// Paralax motion
document.addEventListener('mousemove', parallax);
const lays = document.querySelectorAll('layer');

function parallax(e) {
  this.querySelectorAll('.layer').forEach(Layer => {
    const speed = Layer.getAttribute('data-speed');
    const x = ((window.innerWidth - e.pageX) * speed) / 100;
    const y = ((window.innerWidth - e.pageY) * speed) / 100;

    Layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// Page transitions
window.onload = () => {
  const anchors = document.querySelectorAll('.footer');

  // const mainAnchors = document.querySelectorAll('.main');
  const transitionEl = document.querySelector('.transition');
  const exitEl = document.querySelector('.exit');
  const fadeEl = document.querySelector('.fade');
  const fTitleEl = document.querySelector('.ftitle');

  setTimeout(() => {
    transitionEl.classList.remove('is-active');
  }, 400);

  anchors.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const target = e.target.href;

      exitEl.style.position = 'absolute';
      exitEl.style.bottom = '0';

      fadeEl.style.opacity = '0';

      exitEl.classList.add('is-active');

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  });
};
