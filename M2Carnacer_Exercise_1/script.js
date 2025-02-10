const button = document.getElementById('changeTextBtn');
const paragraph = document.getElementById('message');

button.addEventListener('click', function() {
    paragraph.textContent = 'You clicked the button!';
});
