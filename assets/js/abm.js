
$('#abm').innerHTML = views.login;
views.test();

window.addEventListener('DOMContentLoaded', function() {

    $('#login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        ajax.request({
            'url': 'login.php',
            'data': 'user='+ $('#user').value + '&password=' + $('#password').value,
            'success': function(rta) {
                rta = JSON.parse(rta);
                if(rta.status == 1) {
                    $('#abm').innerHTML = views.render('abm_main');
                } else {
                    $('.session-error').style.display = 'block';
                    $('.session-error').innerHTML = rta.message;
                }
            },
        })
    })
}, false);