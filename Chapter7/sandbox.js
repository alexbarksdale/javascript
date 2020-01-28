const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

const usernamePattern = /^[a-zA-z]{6,12}$/;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.usernameID.value; // username refers to the id in html

    if (usernamePattern.test(username)) {
        feedback.textContent = 'that username is valid';
    } else {
        feedback.textContent = 'that username is invalid';
    }
});

// live feedback
form.usernameID.addEventListener('keyup', (e) => {
    console.log(e);
    if (usernamePattern.test(e.target.value)) {
        form.usernameID.setAttribute('class', 'success');
    } else {
        form.usernameID.setAttribute('class', 'error');
    }
});
