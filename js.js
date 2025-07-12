document.addEventListener('DOMContentLoaded', () => {
    // Select all collapsible headers
    const collapsibleHeaders = document.querySelectorAll('.q-header');

    collapsibleHeaders.forEach(header => {
        // Find the content and icon associated with this specific header's parent
        const container = header.closest('.question-item');
        const content = container.querySelector('.q-answer');
        const toggleIcon = container.querySelector('.toggle-icon');

        header.addEventListener('click', () => {
            const isOpen = content.classList.toggle('open');

            // Toggle icon based on the state of THIS content
            if (isOpen) {
                // Minus icon
                toggleIcon.innerHTML = '-';
            } else {
                // Plus icon
                toggleIcon.innerHTML = '+';
            }
        });
    });
});