document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username && password) {
        console.log('username:', username, 'password:', password);
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        window.location.href = './index.html';
    } else {
        console.log('Будь ласка, заповніть обидва поля.');
    }
});