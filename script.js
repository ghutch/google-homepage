const form = document.querySelector('form');

form.addEventListener('submit', () => {
    document.body.innerHTML = '<h3 class="credit">Created by <a href="https://www.github.com/ghutch/google-homepage">ghutch</a>!</h3><p class="credit">From The Odin Projects <a href="https://www.theodinproject.com/courses/web-development-101/lessons/html-css">Curriculum</a>.</p>';
})