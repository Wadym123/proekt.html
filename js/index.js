const clock = document.querySelector('.clock')
const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval(updateTime,1000);

const sect = document.querySelector('section');
const para = document.createElement('p');
para.classList.add('dynamic');

document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);
function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector('.login-form input[name=name]').value,
            password: document.querySelector('.login-form input[name=password]').value
        })
    })
    .then(_ => document.querySelector('.login-form').reset());
}

$('p').hide();
$('.showme').click(() => $('p').toggle(3000));