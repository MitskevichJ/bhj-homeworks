document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');
    
    function isElementVisible(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        return (
            rect.top < windowHeight && 
            rect.bottom > 0
        );
    }
    
    function checkReveals() {
        reveals.forEach(function(reveal) {
            if (isElementVisible(reveal)) {
                reveal.classList.add('reveal_active');
            }
        });
    }
    
    checkReveals();
    
    window.addEventListener('scroll', checkReveals);
});