
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

  
    if (scrollPosition + windowHeight >= documentHeight - 200) { 
        scrollToTopButton.classList.remove('hide');
    } else {
        scrollToTopButton.classList.add('hide');
    }
});


scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});



