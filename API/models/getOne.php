<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

require "../../config/conexion.php";

$id = mysqli_real_escape_string($conexion,$_GET['id']);

$registros=mysqli_query($conexion,"SELECT * FROM `autos` WHERE `idCliente` = '".$id."'");

$vec = [];
while ($reg=mysqli_fetch_array($registros))
{
$vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;

?>