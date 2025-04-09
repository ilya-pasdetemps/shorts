function loadStory(filename, title) {
    fetch(filename)
        .then(response => response.text())
        .then(text => {
            document.getElementById('main-page').style.display = 'none';
            document.getElementById('story-page').style.display = 'block';
            document.getElementById('story-title').innerText = title;
            document.getElementById('story-content').innerText = text;
        })
        .catch(error => console.error('Error loading story:', error));
}

function toggleMenu() {
    const menu = document.getElementById('story-menu');
    const burger = document.querySelector('.burger');
    const storyTitle = document.getElementById('story-title');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        burger.classList.remove('open');
        storyTitle.innerText = currentStoryTitle; // Restore the story title
    } else {
        menu.style.display = 'block';
        burger.classList.add('open');
        storyTitle.innerText = 'Author Name'; // Change to author name
    }
}