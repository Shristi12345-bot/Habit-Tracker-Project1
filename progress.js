document.addEventListener('DOMContentLoaded', () => {
    // Dropdown structural selector filter changes animation reset
    const filters = document.querySelectorAll('.select-container select');
    
    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            // Simulated state change re-rendering triggers bar resets
            const progressFills = document.querySelectorAll('.progress-bar-fill');
            progressFills.forEach(fill => {
                const initialWidth = fill.style.width;
                fill.style.width = '0%';
                setTimeout(() => {
                    fill.style.width = initialWidth;
                }, 150);
            });
        });
    });
});
