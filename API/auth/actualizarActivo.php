<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

require "../config/conexion.php";

$correo = mysqli_real_escape_string($conexion,$_GET['correo']);

$registros=mysqli_query($conexion,"UPDATE `usuarios` SET `activo` = '1' WHERE `usuarios`.`correo` = '".$correo."'");

class Result {}
$response = new Result( );

    if($registros){ 
        $response->resultado = 'Activo';
    }

echo json_encode($response); // MUESTRA EL JSON GENERADO
?>