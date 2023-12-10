const $ = document;

const input = $.querySelector('input');
const buttonsElem = $.querySelectorAll('button');
const toggleButton = $.querySelector(".toggle-btn");
const container = $.querySelector(".container");

let output = "";
let buttons = Array.from(buttonsElem);
let newQuery = window.matchMedia(' (max-width:480px) ');

buttons.forEach(button => {

    button.addEventListener('click', (event) => {
        if (event.target.dataset.value == '=' && output !== '') {
            output = eval(output);
            input.value = output;
        }

        else if (event.target.dataset.value == 'C') {
            output = "";
            input.value = output;
        }
        else if (event.target.dataset.value == 'Del') {
            output = output.substring(0, output.length - 1);
            // output = output.toString().slice(0,-1)
            input.value = output;
        } else {
            output += event.target.dataset.value;
            input.value = output;
        }

    })
})

window.addEventListener('load', () => {
    input.focus()
})

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    document.documentElement.classList.toggle("light-theme")
});

input.disabled = newQuery.matches ? true : false;