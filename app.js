let buttonText = document.getElementById('counting');

buttonText.addEventListener('click', function () {

    var inputText = document.getElementById('allText').value;

    // Number of letters
    var letterCount = inputText.length;

    // Word count
    var wordCount = inputText.trim().split(/\s+/).length;

    document.getElementById('lettersNumber').textContent = 'Letter Count: ' + letterCount;
    document.getElementById('wordsNumber').textContent = 'Word Count: ' + wordCount;

    document.getElementById('allText').value = '';
    document.getElementById('yourText').textContent = 'Your Text: ' + inputText;
});