// JavaScript for changing background color when button is clicked
document.getElementById('changeColorButton').addEventListener('click', function() {
    // Random background color generator
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});
