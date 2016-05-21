<?php

require 'config.php';

$query = "SELECT * FROM admins WHERE user = ? AND password = ?";

// Preparar la consulta y obtener el objeto PDOStatement
$stmt = $db->prepare($query);

$params = [];

if($_POST['user'] != '' && $_POST['password'] != '') {

    $params[] = $_POST['user'];
    $params[] = md5($_POST['password']);

    // Ejecutar la consulta
    $stmt->execute($params);
    $res = $stmt->fetch();


    if(!empty($res)) {
        $_SESSION['status'] = 1;
        echo json_encode([
            'status' => 1,
            'message' => 'Login correcto'
        ]); 
    }
    else {
        echo json_encode([
            'status' => 0,
            'message' => 'Usuario o Password incorrectos'
        ]);
    }
}
else {
    echo json_encode([
        'status' => 0,
        'message' => 'Todos los campos son obligatorios'
    ]);
}
