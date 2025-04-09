function loadStory(filename) {
    fetch(filename)
        .then(response => response.text())
        .then(text => {
            document.getElementById('main-page').style.display = 'none';
            document.getElementById('story-page').style.display = 'block';
            document.getElementById('story-content').innerText = text;
        })
        .catch(error => console.error('Error loading story:', error));
}

function toggleMenu() {
    const menu = document.getElementById('story-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}