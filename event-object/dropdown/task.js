document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');
        
        valueElement.addEventListener('click', () => {
            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                list.classList.remove('dropdown__list_active');
            });
            
            listElement.classList.toggle('dropdown__list_active');
        });
        
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault(); 
                
                const link = item.querySelector('.dropdown__link');
                valueElement.textContent = link.textContent;
                
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});