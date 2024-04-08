const toTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const button = document.getElementById('toTopButton');
button.addEventListener('click', toTop);