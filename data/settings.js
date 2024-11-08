// settings.js

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        alert(`${button.innerText} successfully updated!`);
    });
});
