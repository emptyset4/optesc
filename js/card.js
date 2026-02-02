// --- "What's New" Modal Logic ---

// Find the elements we need on the page
const whatIsNewCard = document.getElementById('whats-new-card');
const modal = document.getElementById('whats-new-modal');

// Only run this code if the elements actually exist on the current page
if (whatIsNewCard && modal) {
    const closeButton = modal.querySelector('.close-button');

    // Function to open the modal
    function openModal() {
        modal.classList.add('active');
    }

    // Function to close the modal
    function closeModal() {
        modal.classList.remove('active');
    }

    // Event Listeners
    whatIsNewCard.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);

    // Also close the modal if the user clicks on the dark background
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}