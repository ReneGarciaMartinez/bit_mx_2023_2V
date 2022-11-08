<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

require "../../config/conexion.php";

$registros=mysqli_query($conexion,"DELETE FROM `autos` WHERE `idAuto` = '".$_GET['id']."'");

class Result {}
$response = new Result();

if ($registros)
{
    $response->resultado = 'Eliminado';
}else{
    $response->resultado = 'No se pudo eliminar';
}

echo json_encode($response); // MUESTRA EL JSON GENERADO
?>