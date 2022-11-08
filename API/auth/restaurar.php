<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: *');
  header("Access-Control-Allow-Headers: *");
  header('Content-Type: text/html');

require "../config/conexion.php";

$pass = md5($_GET['pass']);
$correo = $_GET['correo'];


$registros=mysqli_query($conexion,"UPDATE `usuarios` SET `pass` = '".$pass."' WHERE `usuarios`.`correo` ='".$correo."'");

class Result {}
$response = new Result();
    
    if(!$registros){
        $response->resultado = 'Fallo';
    }else{
        $response->resultado = 'Actualizado';
    }

echo json_encode($response); // MUESTRA EL JSON GENERADO
?>