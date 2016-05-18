
/**
* Guarda en un objeto las distintas vistas del ABM
*/

var views = {
	/**
	* Agrega header y footer a un view determinado
	* @return string
	*/
	'render': function(view) {
		return this.abm_header += this[view] += this.abm_footer;
	},

	'login': [
		'<p class="session-error alert alert-danger" style="display: none"></p>',
		'<form class="login" id="login-form" action="login.php" method="get">',
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
		'	<table>',
		'		<thead>',
		'			<th>codigo</th>',
		'			<th>ubicacion</th>',
		'			<th>capacidad</th>',
		'			<th>ambientes</th>',
		'			<th>comodidades</th>',
		'			<th>servicios</th>',
		'			<th>img_portada</th>',
		'		</thead>',
		'		<tbody>',
		'			<td>{{codigo}}</td>',
		'			<td>{{ubicacion}}</td>',
		'			<td>{{capacidad}}</td>',
		'			<td>{{ambientes}}</td>',
		'			<td>{{comodidades}}</td>',
		'			<td>{{servicios}}</td>',
		'			<td>{{img_portada}}</td>',
		'		</tbody>',
		'	</table>',
		'</main>'
	].join(''),

	'abm_footer': [
		'<footer>',
		'	<div class="col-xs-12">',
		'		<p>TP1 ABM - Tecnología de las Comunicaciones 4  - Pablo Tomeo</p>',
		'	</div>',
		'</footer>'
	].join('')
	
}

