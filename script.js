
const form = document.createElement('form');
const input1 = document.createElement('input');
const input2 = document.createElement('textarea');
const input3 = document.createElement('input');
const input4 = document.createElement('input');
const input5 = document.createElement('button');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');

document.body.prepend(form);
h1.textContent = 'We would like to help you';
h1.style.color = 'red';
form.prepend(input2);
form.prepend(input1);
form.prepend(h1);
input1.style.display = 'block';
input2.style.display = 'block';
input3.style.display = 'block';
input4.style.display = 'block';
input5.style.display = 'block';
form.append(h3);
h3.textContent = 'how to answer you?';
form.append(input3);
form.append(input4);
form.append(input5);
input2.style.margin = '10px';
input3.style.margin = '10px';
input4.style.margin = '10px';
input5.style.margin = '10px';
input1.style.margin = '10px';
input1.placeholder = 'name';
input2.placeholder = 'message';
input3.placeholder = 'phone';
input4.placeholder = 'email';
input5.style.width = '170px';
input5.style.height = '22px';
input5.type = 'submit';
input5.textContent = 'send message';
form.style.backgroundColor = 'silver';

input1.setAttribute('name', 'name');
input1.setAttribute('required','');
input2.setAttribute('minlength', '5');
input2.setAttribute('name', 'message');
input3.setAttribute('type', 'tel');
input3.setAttribute('required', '');
input3.setAttribute('pattern', '[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}');
input3.value = '+380';
input3.setAttribute('name', 'phone');
input4.setAttribute('type', 'email');
input4.setAttribute('required', '');
input4.setAttribute('name', 'email');

function validateEmail() {
    const emailValue = input4.value;
    if(!emailValue.includes('.')){
        input4.setCustomValidity('E-mail must contain "."');
    } else {
        input4.setCustomValidity('');
    }
}

input4.addEventListener('input', () => validateEmail());

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(Object.fromEntries(new FormData(event.target).entries()));
});
