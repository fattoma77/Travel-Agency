document.addEventListener('DOMContentLoaded', function() {
    
    window.toggleFavorite = function(button) {
        button.classList.toggle('active');
        
        if (button.classList.contains('active')) {
            button.querySelector('i').classList.remove('far');
            button.querySelector('i').classList.add('fas');
        } else {
            button.querySelector('i').classList.remove('fas');
            button.querySelector('i').classList.add('far');
        }
    };
    
    const favoriteButtons = document.querySelectorAll('.btn-favorite');
    favoriteButtons.forEach(button => {
        if (button.classList.contains('active')) {
            button.querySelector('i').classList.remove('far');
            button.querySelector('i').classList.add('fas');
        }
    });
    
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});