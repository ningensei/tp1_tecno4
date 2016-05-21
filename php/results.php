<?php

require 'config.php';

$query = "SELECT * FROM propiedades";

// Preparar la consulta y obtener el objeto PDOStatement
$stmt = $db->prepare($query);


// Ejecutar la consulta
$stmt->execute($params);
$res = $stmt->fetch();


