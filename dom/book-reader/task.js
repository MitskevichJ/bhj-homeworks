document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    
    const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');
    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            fontSizeControls.forEach(c => c.classList.remove('font-size_active'));
            
            this.classList.add('font-size_active');
            
            book.classList.remove('book_fs-small', 'book_fs-big');
            
            const size = this.dataset.size;
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
    
    const textColorControls = document.querySelectorAll('.book__control_color .color');
    textColorControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            textColorControls.forEach(c => c.classList.remove('color_active'));
            
            this.classList.add('color_active');
            
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
            
            const color = this.dataset.textColor;
            if (color) {
                book.classList.add(`book_color-${color}`);
            }
        });
    });
    
    const bgColorControls = document.querySelectorAll('.book__control_background .color');
    bgColorControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            bgColorControls.forEach(c => c.classList.remove('color_active'));
            
            this.classList.add('color_active');
            
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
            
            const color = this.dataset.bgColor;
            if (color) {
                book.classList.add(`book_bg-${color}`);
            }
        });
    });
})