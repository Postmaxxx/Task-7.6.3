import ('./styles/main.css');

let input = document.getElementById('input1');
let button = document.getElementById('button1');
let result = document.getElementById('result1');








function reverse(string) {
    if (string.length < 5 ) return `String too short! (${string.length} symbols)`;
    if (string.length > 20 ) return `String too long! (${string.length - 20} symbols excess)`;
    if (string != string.match(/[A-Za-z]*/)[0]) return "String contains ivalid symbols!"
    return string.split('').reverse().join('');
};


function showResult(text) {
    result.innerText = text;
    console.log(text);
};



function pageLoaded() {
    button.addEventListener('click', () => {
        showResult(reverse(input.value));
    })
};



document.addEventListener("DOMContentLoaded", pageLoaded);

module.exports = reverse;