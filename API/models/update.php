<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: true');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Accept, *");
  header('Content-Type: text/html');


require "../../config/conexion.php";

$json = file_get_contents('php://input');

$params = json_decode($json);

$registros=mysqli_query($conexion,"UPDATE `autos` SET `modelo` = '".$params->modelo."', `placa` = '".$params->placa."' WHERE `autos`.`idAuto` = '".$_GET['id']."' ");

class Result {}
$response = new Result();

if ($registros){
    $response->resultado = 'OK';
    $response->mensaje = 'Registro correcto';
}

echo json_encode($response);
?>