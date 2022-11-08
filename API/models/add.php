<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: true');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Accept, *");
  header('Content-Type: text/html');

  $json = file_get_contents('php://input');

  $params = json_decode($json);
  
  require "../../config/conexion.php";

    mysqli_query($conexion,"INSERT INTO `autos` (`idAuto`, `modelo`, `placa`, `idCliente`) 
    VALUES (NULL, '".$params->modelo."', '".$params->placa."', '".$params->idCliente."')");
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Registro correcto';

  echo json_encode($response);
?>

INSERT INTO `talleres` (`id_nombre`, `taller`, `horario`, `descripcion`, `imagen`, `ponente`) VALUES (NULL, 'Marketing', '12:00:00', 'Director General de la agencia Winn Innovation', 'taller.jpg', 'DR JORGE ABRAMS');
