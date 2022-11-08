<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Credentials: *');
  header("Access-Control-Allow-Headers: *");
  header('Content-Type: text/html');
  
  require "../config/conexion.php";

  $json = file_get_contents('php://input');

  $params = json_decode($json);
  
  class Result {}
  $response = new Result();
  
  $pass = MD5($params->pass);

  $validar=mysqli_query($conexion,"SELECT * FROM `usuarios` WHERE `correo` = '".$params->correo."'");
  if ($reg=mysqli_fetch_array($validar)){
    $response->resultado = 'Error';
    $response->message = 'El correo ya existe';
  }else{
  $registros = mysqli_query($conexion,"INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido_paterno`, `apellido_materno`, `carrera`, `matricula`, `correo`, `pass`, `perfil`, `estatus`, `institucion`, `celular`, `token`, `codigo`, `activo`)
  VALUES (NULL, NULL, NULL, NULL, NULL, NULL, '".$params->correo."', '".$pass."', NULL, '1', NULL, NULL, NULL, NULL, NULL);");
    if ($registros){
      $response->resultado = 'OK';
      $response->message = 'Registrado';
    }else{
      $response->resultado = 'Error';
      $response->message = 'No se pudo registrar';
    }
  }

  echo json_encode($response);
?>
