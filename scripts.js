const authorName = "ilya pasdetemps";
let currentStory = null;

// Get current year for copyright
function getCurrentYear() {
    return new Date().getFullYear();
}

// Generate menu items from config
function generateMenu() {
    const menuContainer = document.getElementById('story-menu');
    menuContainer.innerHTML = '';

    stories.forEach(story => {
        const menuItem = document.createElement('a');
        
        // Check if this is the current story
        if (currentStory && story.title === currentStory.title) {
            menuItem.classList.add('current-story');
            menuItem.textContent = story.title;
        } else {
            menuItem.href = '#';
            menuItem.textContent = story.title;
            menuItem.onclick = () => loadStory(story.filename, story.title);
        }
        
        menuContainer.appendChild(menuItem);
    });
}

// Load story content
function loadStory(filename, title) {
    // Find the story in our config
    currentStory = stories.find(story => story.filename === filename);
    
    fetch(filename)
        .then(response => response.text())
        .then(text => {
            document.getElementById('main-page').style.display = 'none';
            document.getElementById('story-page').style.display = 'block';
            document.getElementById('story-title').innerText = title;
            document.getElementById('story-content').innerText = text;
            
            // Update menu to highlight current story
            generateMenu();
        })
        .catch(error => console.error('Error loading story:', error));
}

// Toggle menu visibility and burger icon
function toggleMenu() {
    const menu = document.getElementById('story-menu');
    const burger = document.querySelector('.burger');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        burger.classList.remove('open');
    } else {
        menu.classList.add('open');
        burger.classList.add('open');
    }
}

// Return to main page
function showMainPage() {
    document.getElementById('story-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
    currentStory = null;
}

// Initialize the page
function initPage() {
    // Generate story links on main page
    const storyGrid = document.querySelector('.story-grid');
    storyGrid.innerHTML = '';
    
    stories.forEach(story => {
        const storyLink = document.createElement('a');
        storyLink.href = '#';
        storyLink.textContent = story.title;
        storyLink.onclick = () => loadStory(story.filename, story.title);
        storyGrid.appendChild(storyLink);
    });
    
    // Generate the menu
    generateMenu();
    
    // Update copyright year
    const copyrightElement = document.querySelector('footer p');
    copyrightElement.textContent = `© 2025-${getCurrentYear()} ${authorName}. all rights reserved.`;
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);