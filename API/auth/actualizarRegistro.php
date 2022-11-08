<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: true');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Accept, *");
  header('Content-Type: text/html');


require "../config/conexion.php";

$json = file_get_contents('php://input');

$params = json_decode($json);

$registros=mysqli_query($conexion,"UPDATE `usuarios` SET `nombre` = '".$params->nombre."', `apellido_paterno` = '".$params->apellido_paterno."',
`apellido_materno` = '".$params->apellido_materno."', `carrera` = '".$params->carrera."', `matricula` = '".$params->matricula."', `institucion` = '".$params->institucion."',
`celular` = '".$params->celular."' WHERE `usuarios`.`id_usuario` = '".$params->id_usuario."';");

class Result {}
$response = new Result();

if ($registros){
    $response->resultado = 'OK';
    $response->mensaje = 'Registro correcto';
}

echo json_encode($response);
?>