CREATE DATABASE ClipMoneyReducida2
use ClipMoneyReducida2



	
CREATE TABLE Usuario (
  IDUsuario int primary key identity (1,1)not null,
  pass varchar(100) not null,
  nick varchar(100) not null,
  email varchar(200) not null,
  nombre varchar (100) not null,
  apellido varchar (100) not null,
  dni int not null
);

CREATE TABLE Cuenta (
  IDCuenta int primary key identity (1,1)not null,
  nombre varchar(100),
  fondo money,
  IDUsuario int references Usuario(IDUsuario) not null
);


CREATE TABLE Operaciones (
  IDOperacion int primary key identity (1,1)not null,
  nombre varchar (100) not null,
  monto money not null,
  fechaOperacion datetime,
  IDCuenta int references Cuenta(IDCuenta) not null
)
