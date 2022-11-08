CREATE TABLE `usuarios` (
  `id_usuario` int(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255) NULL,
  `apellido_paterno` varchar(255) NULL,
  `apellido_materno` varchar(255) NULL,
  `carrera` varchar(255) NULL,
  `matricula` varchar(255) NULL,
  `correo` varchar(255) NOT NULL,
  `pass` varchar(250) NOT NULL,
  `perfil` varchar(255) NULL,
  `estatus` int(2) NOT NULL,
  `institucion` varchar(255) NULL,
  `celular` varchar(255) NULL,
  `token` varchar(255) NULL,
  `codigo` varchar(255) NULL
);