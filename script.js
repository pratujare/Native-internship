// Toggle Navigation Menu for Mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
    let navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});

// Toggle Sidebar
function toggleSidebar() {
    let sidebar = document.querySelector('aside');
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
}

// Toggle Blog Content
function toggleContent(id) {
    let content = document.getElementById(id);
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}
