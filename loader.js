window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const mainContent = document.querySelector('#main-content');
    
    // Hide loader and show content
    loader.classList.add('hidden');
    mainContent.classList.add('loaded');
    
    // Remove loader from DOM after transition
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500); // Matches CSS transition duration
});