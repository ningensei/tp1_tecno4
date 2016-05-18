DROP DATABASE IF EXISTS propiedades;
CREATE DATABASE propiedades;
USE propiedades;

CREATE TABLE admins(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
)engine=innodb DEFAULT CHARSET='utf8';

CREATE TABLE localidades(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  localidad VARCHAR(100) NOT NULL
)engine=innodb DEFAULT CHARSET='utf8';

CREATE TABLE propiedades_imagenes (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  propiedad_id INT,
  imagen VARCHAR(255)
)engine=innodb DEFAULT CHARSET='utf8';

CREATE TABLE propiedades(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(45) NOT NULL,
  ubicacion VARCHAR(255),
  capacidad TINYINT(2),
  ambientes TINYINT(2),
  comodidades VARCHAR(255),
  servicios VARCHAR(255),
  img_portada VARCHAR(255),
  localidad_fk INT UNSIGNED,
  FOREIGN KEY(localidad_fk) REFERENCES localidades(id)
)engine=innodb DEFAULT CHARSET='utf8';

INSERT INTO admins(user, password)
  VALUES ('admin', '21232f297a57a5a743894a0e4a801fc3');

INSERT INTO localidades(localidad)
  VALUES ('Ushuaia'), ('Puerto Madryn'), ('San Juan'), ('Buenos Aires'), ('Tandil');
  
INSERT INTO propiedades(codigo, ubicacion, capacidad, ambientes, comodidades, servicios, localidad_fk)
  VALUES ('TA001', '7 cuadras del centro (Rivadavia y Constitución)', 8, 5, 'Habitación con cama matrimonial más una cama cucheta, segunda habitación con cama matrimonial más cama cucheta, living-comedor, cocina, quincho con mesa de ping-pong, parrilla, entrada para 3 autos, pileta.', 'aire acondicionado en quincho y habitaciones con ventilador. Pileta', 5),
         ('TA002', 'La Helena (Eduardo Rodriguez 900)', 6, 4, 'Habitación con cama matrimonial, habitación con dos camas cuchetas, living comedor con cocina integrada, jardín, entrada de autos.', 'Habitación con cama matrimonial, habitación con dos camas cuchetas, living comedor con cocina integrada, jardín, entrada de autos.', 5),
         ('TA003', 'a 4 cuadras del Monte Calvario', 6, 4, '1 habitación con cama de plaza y 1/2, una habitación con dos camas individuales, una habitación con cama de 2 plazas más cama catre. Sofá grande en living, cocina integrada, patio para guardar auto, parrilla.', 'ropa blanca', 5),
         ('TA004', 'a 5 cuadras de la Movediza', 4, 3, 'monoambiente, baño, cocina, lavarropas, parrilla, entrada de auto.', 'aire acondicionado, salamandra, tv por cable, pileta.', 5),
         ('TA005', 'zona Calvario', 4, 3, 'departamentos de 50 m2, una habitación matrimonial, 1 baño, living comedor con cocina integrada, patio de luz, entrada de auto con portón automático.', 'ropa blanca, secador de pelo, aire acondicionado, tv, DVD, wi-fi.', 5),
         ('TA006', 'a 4 cuadras del centro', 5, 4, 'monoambiente y departamento de 2 ambientes por escalera. Monoambiente con cama matrimonial más sofá cama con carricama, cocina equipada, balcón y patio cerrado. Departamento de dos ambientes con un cuarto con cama matrimonial más cama cucheta, living comedor con cocina integrada y sofa cama.', 'tv con cable, wi-fi. Monoambiente con cochera propia.', 5);