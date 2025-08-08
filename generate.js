
const email = localStorage.getItem('email');
const fullName = localStorage.getItem('fullName');
const gitmail = localStorage.getItem('gitmail');
const image = localStorage.getItem('fileInput');

document.getElementById('name').innerHTML = fullName;
document.getElementById('git-mail').innerHTML = gitmail;
document.getElementById('email').innerHTML = email;
document.getElementById('myname').innerHTML = fullName;

document.getElementById('user-image').src = image;

const randomNumber = `#${Math.floor(10000 + Math.random() * 90000)}`;
document.getElementById('random-num').textContent = randomNumber;

