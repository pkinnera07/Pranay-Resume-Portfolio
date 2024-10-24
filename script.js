// Function to toggle the visibility of a submenu
function toggleSubmenu(submenu) {
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}

// Function to toggle the visibility of an element
function toggleVisibility(element) {
    element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}

// Initialize collapsible sections
function setupCollapsibleSection(collapsibleElement, submenuElement) {
    collapsibleElement.addEventListener('click', (e) => {
        e.stopPropagation();  // Prevents parent content switching
        toggleSubmenu(submenuElement);  // Toggle the submenu display
    });
}

// Initialize navigation and section switching
function setupNavigation(navItems, contentSections) {
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const sectionId = this.dataset.section;

            // Remove 'active' class from all navigation items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Set the clicked item as active
            this.classList.add('active');

            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));

            // Show the relevant content section or the dashboard if no specific section is selected
            if (sectionId) {
                document.getElementById(`content-${sectionId}`).classList.add('active');
            } else if (this.id === 'dashboard') {
                // Show the dashboard section
                document.getElementById('content-dashboard').classList.add('active');
            } else if (this.id === 'faq-link') {
                // Show the FAQ section
                document.getElementById('faq-section').classList.add('active');
            }
        });
    });
}

// Search functionality for FAQs
function setupFaqSearch() {
    const searchInput = document.getElementById('faq-search');
    const faqItems = document.querySelectorAll('#faq-list li');

    searchInput.addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase();

        // Filter FAQ items based on search query
        faqItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchQuery) ? 'block' : 'none';
        });
    });
}

// Setup collapsible FAQ questions and answers
function setupFaqCollapsible() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            // Toggle the 'active' class for highlighting the clicked question
            this.classList.toggle('active');

            // Find the next sibling element, which is the answer, and toggle its visibility
            const answer = this.nextElementSibling;
            toggleVisibility(answer);
        });
    });
}

// Initial setup when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Select collapsible elements for Current Account and Savings Account sections
    const collapsibleCurrentAccount = document.querySelector('.collapsible.current-account');
    const submenuCurrentAccount = document.querySelector('.submenu.current-account');

    const collapsibleSavingsAccount = document.querySelector('.collapsible.savings-account');
    const submenuSavingsAccount = document.querySelector('.submenu.savings-account');

    // Select all navigation items and content sections
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');

    // Set the default active section to the Dashboard
    document.getElementById('dashboard').classList.add('active');
    document.getElementById('content-dashboard').classList.add('active');

    // Setup collapsible sections for the account menus
    setupCollapsibleSection(collapsibleCurrentAccount, submenuCurrentAccount);
    setupCollapsibleSection(collapsibleSavingsAccount, submenuSavingsAccount);

    // Setup navigation for switching between content sections
    setupNavigation(document.querySelectorAll('.submenu .nav-item, #dashboard, #faq-link'), contentSections);

    // Setup FAQ search functionality
    setupFaqSearch();

    // Setup collapsible functionality for FAQ questions and answers
    setupFaqCollapsible();
});
