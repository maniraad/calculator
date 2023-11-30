const $ = document;

const input = $.querySelector('input');
const buttonsElem = $.querySelectorAll('button');

let output = "";
let buttons = Array.from(buttonsElem);

buttons.forEach(button => {

    button.addEventListener('click', (event) => {
        if (event.target.dataset.value == '=') {
            output = eval(output);
            console.log(eval(output));
            input.value = output;
        }

        else if (event.target.dataset.value == 'C') {
            output = "";
            input.value = output;
        }
        else if (event.target.dataset.value == 'Del') {
            output = output.substring(0, output.length - 1);
            input.value = output;
        }
        else {
            output += event.target.innerHTML;
            input.value = output;
        }
        
    })
})