function toggle() {
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
cursor.style.left = e.pageX + 'px';
cursor.style.top = e.pageY + 'px';
})