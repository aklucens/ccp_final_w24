const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const toTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const button = document.getElementById('toTopButton');
button.addEventListener('click', toTop);