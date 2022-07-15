const hamb = document.querySelector('header_nav_right');
const popup = document.querySelector('#popup');


hamb.addEventListener('click', hambHandler);

function hambHanddler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
}