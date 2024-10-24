// Function to toggle the visibility of a submenu
function toggleSubmenu(submenu, button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Toggle the display property of the submenu
    submenu.style.display = isExpanded ? 'none' : 'block';

    // Update the aria-expanded attribute based on the new state
    button.setAttribute('aria-expanded', !isExpanded);
}

// Function to toggle the visibility of an element
function toggleVisibility(element) {
    element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}

// Initialize collapsible sections
function setupCollapsibleSection(collapsibleElement, submenuElement) {
    // Set initial aria-expanded attribute
    collapsibleElement.setAttribute('aria-expanded', 'false');

    collapsibleElement.addEventListener('click', (e) => {
        e.stopPropagation();  // Prevents parent content switching

        // Toggle the submenu display and aria-expanded state
        toggleSubmenu(submenuElement, collapsibleElement);
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


//Transactions Management////////////////
// Function to fetch transactions from the data.json file
async function loadTransactions() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Pass current and savings transactions to display function
        displayTransactions(data.current_transactions, data.savings_transactions);
    } catch (error) {
        console.error('Error loading transactions:', error);
    }
}

// Function to display transactions in the UI
function displayTransactions(currentTransactions, savingsTransactions) {
    const currentTransactionList = document.querySelector('.current-transactions-list');
    const savingsTransactionList = document.querySelector('.savings-transactions-list');

    // Clear existing items
    currentTransactionList.innerHTML = '';
    savingsTransactionList.innerHTML = '';

    // Display current transactions
    currentTransactions.slice().reverse().forEach(trans => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="transaction-container ${trans.amount.startsWith('-') ? 'debit' : 'credit'}">
                <span class="datetime">${trans.datetime}</span>
                <span class="transaction">${trans.transaction}</span>
                <span class="amount">${trans.amount}</span>
            </div>
        `;
        currentTransactionList.appendChild(listItem);
    });

    // Display savings transactions
    savingsTransactions.slice().reverse().forEach(trans => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="transaction-container ${trans.amount.startsWith('-') ? 'debit' : 'credit'}">
                <span class="datetime">${trans.datetime}</span>
                <span class="transaction">${trans.transaction}</span>
                <span class="amount">${trans.amount}</span>
            </div>
        `;
        savingsTransactionList.appendChild(listItem);
    });
}

// Load transactions when the document is ready
document.addEventListener('DOMContentLoaded', loadTransactions);


// Handle form submission
document.getElementById('transfer-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const senderAccount = document.getElementById('sender-account').value;
    const recipientAccount = document.getElementById('recipient-account').value;
    const recipientName = document.getElementById('recipient-name').value;
    const transferAmount = document.getElementById('transfer-amount').value;
    const transferNotes = document.getElementById('transfer-notes').value;

    // Create a new transaction object

    const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };
    
    const newTransaction = {
        datetime: new Date().toLocaleString('en-GB', options),
        transaction: `Transfer to ${recipientName} (${recipientAccount})`,
        amount: transferAmount.startsWith('-') ? transferAmount : `+$${transferAmount}`
    };

    // Fetch existing transactions and add the new one
    const transactions = await fetch('data.json').then(response => response.json());
    transactions.push(newTransaction);

    // Display the updated transactions
    displayTransactions(transactions);

    // Reset the form
    this.reset();
});

// Call the function to load transactions on page load
window.onload = loadTransactions;

