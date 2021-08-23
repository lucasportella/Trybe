CREATE TABLE Animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    especie VARCHAR(45),
    sexo VARCHAR(45),
    idade INT,
    localizacao VARCHAR(45)
) ENGINE=InnoDB;

CREATE TABLE gerente(
    gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
) ENGINE=InnoDB;

CREATE TABLE cuidador(
    cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
)ENGINE=InnoDB;