<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

require "../config/conexion.php";

$pass = md5($_GET['pass']);

$user = mysqli_real_escape_string($conexion,$_GET['correo']);

$registros=mysqli_query($conexion,"SELECT * FROM `usuarios` WHERE `correo` = '".$user."' AND  `pass` = '".$pass."'");

class Result {}
$response = new Result( );

    while($row = mysqli_fetch_array($registros)){
        $permitted_chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $random = substr(str_shuffle($permitted_chars), 0, 15);
        $response->token = $random;
        $response->resultado = 'Conectado';
        $response->id_usuario = $row['id_usuario'];
        $response->nombre = $row['nombre'];
        $response->apellido_paterno = $row['apellido_paterno'];
        $response->apellido_materno = $row['apellido_materno'];
        $response->carrera = $row['carrera'];
        $response->matricula = $row['matricula'];
        $response->correo = $row['correo'];
        $response->perfil = $row['perfil'];
        $response->estatus = $row['estatus'];
        $response->activo = $row['activo'];
        $response->institucion = $row['institucion'];
        $response->celular = $row['celular'];
    } 
    
    if($registros->num_rows<1){ 
        $response->resultado = 'Fallo';
    }

echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
