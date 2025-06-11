document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(function(rotator) {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;
        let timeoutId;
        
        function rotate() {
            cases[currentIndex].classList.remove('rotator__case_active');
            
            currentIndex = (currentIndex + 1) % cases.length;
            
            const currentCase = cases[currentIndex];
            const speed = currentCase.dataset.speed || 1000;
            const color = currentCase.dataset.color || 'black';
            
            currentCase.classList.add('rotator__case_active');
            currentCase.style.color = color;
            
            timeoutId = setTimeout(rotate, speed);
        }
        
        const initialSpeed = cases[0].dataset.speed || 1000;
        timeoutId = setTimeout(rotate, initialSpeed);
        
        rotator._cleanup = function() {
            clearTimeout(timeoutId);
        };
    });
});