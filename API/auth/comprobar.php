<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

require "../config/conexion.php";

$correo = mysqli_real_escape_string($conexion,$_GET['correo']);


$registros=mysqli_query($conexion,"SELECT * FROM usuarios WHERE `usuarios`.`correo` = '".$correo."'");

class Result {}
$response = new Result( );

while($row = mysqli_fetch_array($registros)){
    $response->codigo= $row['codigo'];
} 

if($registros->num_rows<1){ 
    $response->resultado = 'Fallo';
}

echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
