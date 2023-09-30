const switchTheme = document.querySelector('.btn');
const body = document.body;

switchTheme.addEventListener('click', function () {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        switchTheme.innerHTML = "Light";
    } else {
        switchTheme.innerHTML = "Dark";
    }
});