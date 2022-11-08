
<?php

$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'bitmx';

try {
    $conexion = new mysqli($db_host, $db_username,$db_password,$db_name);
    $conexion->set_charset("utf8");
    if($conexion->connect_errno){
        die("La conexion ha fallado" . $conexion->connect_errno);
    }
} catch (mysqli_sql_exception $e){
    throw $e;
}

?>