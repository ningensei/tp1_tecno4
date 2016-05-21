/**
* Guarda en un objeto las distintas vistas del ABM
*/

var views = {
    'test': function() {
        var obj = {'codigo': 'prueba', 'servicios': 'prueba_2'};
        return this.replace_vars(this.table_rows, obj);
    },

    /**
    * Obtiene las {{variables}} de un string
    * @return array
    */
    'get_vars': function(str)
    {
        return str.match(/{{\w+}}/g);
    },

    /**
    * Reemplaza las {{variables}} de un string por las que se le pase en un objeto
    * @return string
    */
    'replace_vars': function(view, obj)
    {
    	if(!view || !obj) { return false; }

        var vars = this.get_vars(view);

        for(var i in obj) {
            for(var j = 0; j < vars.length; j++) {
            	// Quita los {{ }}
                clean_var = vars[j].replace(vars[j], vars[j].match(/\w+/));
                // reemplaza las {{var}} por el value correspondiente que se recibe en el objeto
                if(clean_var == i) {
                    view = view.replace(vars[j], obj[i]);
                }
            }
        }

        return view;
    },

    /**
    * Agrega header y footer a un view determinado
    * @return string
    */
    'render': function(view)
    {
        if(!this[view]) {
            return 'La vista no existe';
        }
        else {
            return this.abm_header += this[view] += this.abm_footer;    
        }
        
    },

    'login': [
        '<p class="session-error alert alert-danger" style="display: none"></p>',
        '<form class="login" id="login-form" action="php/login.php" method="post">',
        '    <h2>Panel de Administración</h2>',
        '        Nombre <input type="text" id="user" name="user"/>',
        '        Contraseña <input type="password" id="password" name="password"/>',
        '    <button type="submit">Loguear</button>',
        '</form>'
    ].join(''),

    'abm_header': [
        '<header>',
            '<nav class="navbar navbar-default">',
              '<div class="container-fluid">',
                '<div class="navbar-header">',
                  '<a class="navbar-brand" href="#">',
                    'ABM',
                  '</a>',
                    '<p class="navbar-text navbar-right">Bienvenido {{nombre}}</a></p>',

                '</div>',
                '<button id="sign-out" type="button" class="btn btn-danger">Sign Out</button>',
              '</div>',
            '</nav>',
        '</header>'
    ].join(''),

    'abm_results': [
        '<main>',
        '   <table>',
        '       <thead>',
        '           <th>codigo</th>',
        '           <th>ubicacion</th>',
        '           <th>capacidad</th>',
        '           <th>ambientes</th>',
        '           <th>comodidades</th>',
        '           <th>servicios</th>',
        '           <th>img_portada</th>',
        '       </thead>',
        '       <tbody>',
        '           {{table_rows}}',
        '       </tbody>',
        '   </table>',
        '</main>'
    ].join(''),

    'table_rows': [
        '<tr>',
        '   <td>{{codigo}}</td>',
        '   <td>{{ubicacion}}</td>',
        '   <td>{{capacidad}}</td>',
        '   <td>{{ambientes}}</td>',
        '   <td>{{comodidades}}</td>',
        '   <td>{{servicios}}</td>',
        '   <td>{{img_portada}}</td>',
        '</tr>'
    ].join(''),

    'abm_footer': [
        '<footer>',
        '   <div class="col-xs-12">',
        '       <p>TP1 ABM - Tecnología de las Comunicaciones 4  - Pablo Tomeo</p>',
        '   </div>',
        '</footer>'
    ].join('')
    
}