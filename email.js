console.log('Hello');

$(document).ready(() => {
    $('.submit').click((event) => {

        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            console.log('email valid');
        } else {
            console.log('invalid email');
        // prevents form from submitting on failure
            event.preventDefault();
        }
        if (message.length > 20) {
            console.log('valid');
        } else {
            console.log('invalid');
            event.preventDefault(); 
        }
    })
})
