
window.addEventListener('DOMContentLoaded', function() {
    
    /**
    * Chequea si el usuario ya ha iniciado sesión
    */
    ajax.request({
        'url': 'php/sesion.php',
        'success': function(rta) {
            if(rta.status == 1) {
                $('#abm').innerHTML = views.render('abm_results');
            } else {
                $('#abm').innerHTML = views.login;
            }
        },
    });

    /**
    * Chequea si el usuario existe en base de datos
    */
    
    $('#login-form').addEventListener('submit', function(e) {
        if (hasClass(e.target, 'login')) {
            e.preventDefault();
            console.log('aca');
        }
        
        return;
        ajax.request({
            'method': 'POST',
            'url': 'php/login.php',
            'data': 'user='+ $('#user').value + '&password=' + $('#password').value,
            'success': function(rta) {
                rta = JSON.parse(rta);
                if(rta.status == 1) {
                    $('#abm').innerHTML = views.render('abm_results');
                } else {
                    $('.session-error').style.display = 'block';
                    $('.session-error').innerHTML = rta.message;
                }
            },
        });
    });
}, false);

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}