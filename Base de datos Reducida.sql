use clipmoney3


CREATE TABLE Cuenta (
  IDCuenta int primary key identity (1,1)not null,
  nombre varchar(100),
  fondo money
);

	
CREATE TABLE Usuario (
  IDUsuario int primary key identity (1,1)not null,
  pass varchar(100) not null,
  nick varchar(100) not null,
  email varchar(100) not null,
  dniT varchar(100) not null,
  dniF varchar(100) not null,
  IDCuenta int references Cuenta(IDCuenta) not null,
);


CREATE TABLE Operaciones (
  IDOperacion int primary key identity (1,1)not null,
  hora time not null,
  fecha date not null,
  nombre varchar (100) not null,
  monto money not null,
  fechaEgreso date,
  fechaIngreso date,
  IDCuenta int references Cuenta(IDCuenta) not null
);


