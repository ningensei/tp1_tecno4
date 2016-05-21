<?php

// Allow Error Reporting
error_reporting(-1);
ini_set('display_errors', 'On');

// Definir los parámetros de la conexión
$db_host = "localhost";
$db_user = "root";
$db_pass = "root";
$db_base = "propiedades";
$db_dsn  = "mysql:host=" . $db_host . ";dbname=" . $db_base .";charset=utf8";

// DSN => Driver Source Name
try {
    $db = new PDO($db_dsn, $db_user, $db_pass);
} catch(Exception $e) {
    echo "Error al conectar con la base de datos.";
}

// Iniciar Sesión
session_start();