const clock = document.querySelector('.clock')
const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval(updateTime,1000);

btnEnglishSwitchON.addEventListener('click',langEngChange);
function langEngChange(){
}
const btnClothes = document.querySelector('.clothes');
btnClothes.addEventListener('click', clothes);
function clothes() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.product-list')
                .innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}
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