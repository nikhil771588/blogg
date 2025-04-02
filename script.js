function checkAnswer(answer) {
    let result = document.getElementById('result');
    result.style.opacity = '0';
    
    setTimeout(() => {
        if (answer === 'Shadow Paging') {
            result.innerText = "Correct! Shadow Paging keeps a separate copy of pages.";
        } else {
            result.innerText = "Incorrect. Try again!";
        }
        result.style.opacity = '1';
    }, 300);
}