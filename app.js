const darkModeToggle = () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// Set theme on load
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}

// Dark mode button
const btnDarkMode = document.getElementById('btn-darkmode');
btnDarkMode.addEventListener('click', darkModeToggle);