CREATE TABLE `talleres` (
  `id_nombre` int(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `taller` varchar(255) NOT NULL,
  `horario` time NOT NULL,
  `descripcion` varchar(255) NOT NULL
);