document.addEventListener('DOMContentLoaded', () => {
    
    const collapsibleHeaders = document.querySelectorAll('.q-header');

    collapsibleHeaders.forEach(header => {
      
        const container = header.closest('.question-item');
        const content = container.querySelector('.q-answer');
        const toggleIcon = container.querySelector('.toggle-icon');

        header.addEventListener('click', () => {
            const isOpen = content.classList.toggle('open');

           
            if (isOpen) {

                toggleIcon.innerHTML = '<i class="fa fa-minus >"></i>';
            } else {

                toggleIcon.innerHTML = '<i class="fa fa-plus >"></i>';
            }
        });
    });
});