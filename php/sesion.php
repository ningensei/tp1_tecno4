<?php

require 'config.php';

if(isset($_SESSION['status']) && $_SESSION['status'] == 1) {
    echo json_encode([
        'status' => 1,
        'message' => 'El usuario está logueado'
    ]); 
}
else {
    echo json_encode([
        'status' => 0,
        'message' => 'Usuario no logueado'
    ]);
}

