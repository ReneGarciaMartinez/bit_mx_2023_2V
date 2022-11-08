<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $to = $_GET['to'];
    $from = $_GET['from'];
    $subject = "Tu código de un solo uso";
    $permitted_chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $random = substr(str_shuffle($permitted_chars), 0, 6);
    $message = '<!DOCTYPE html>'.
    '<html>'.
    '<head>'.
    '<title>Tu código de un solo uso</title> <meta charset = \"utf-8\"/></head>'.
    '.<body>'.
    '.<p>Hola, '.$to.'<p>'.
    '.<p>Tu código de un solo uso es: '.'<h1>'.$random.'<h1></p>'.
    '.<p>Si no solicitaste este código, puedes hacer caso omiso de este mensaje de correo electrónico.
    Otra persona puede haber escrito tu dirección de correo electrónico por error.</p>'.
    '.<p>Gracias</p>'.
    '.</body>'.
    '.</html>';
    $headers = 'From:'.$from.''."\r\n";
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    mail($to,$subject,$message, $headers);
    class Result {}
    $response = new Result();
    $response->resultado = 'Conectado';
    $response->correo = $to;
    $response->codigo = $random;
    echo json_encode($response);
?>