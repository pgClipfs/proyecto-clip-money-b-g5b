CREATE TABLE Estado (
  IDEstado int primary key identity (1,1)not null,
  nombre varchar(100) not null,
);


CREATE TABLE Periodo (
  IDPeriodo int primary key identity (1,1)not null,
  fechaDesde date not null,
  fechaHasta date not null,
);

CREATE TABLE Tipo_Factura (
  IDTipoFactura int primary key identity (1,1)not null,
  nombre varchar(200) not null,
  IDPeriodo int references Periodo(IDPeriodo) not null
);

CREATE TABLE Factura (
  IDFactura int primary key identity (1,1)not null,
  fechaVencimiento date not null,
  monto money not null,
  IDUsuario int not null,
  fechaEmision date not null,
  IDTipoFactura int references Tipo_Factura(IDTipoFactura) not null,
  IDEstado int references Estado(IDEstado) not null
);

CREATE TABLE Tipo_Operacion (
  IDTipoOperacion int primary key identity (1,1)not null,
  nombre varchar(100) not null,
  montoAInvertir money,
  fechaIngreso date,
  fechaFinzalizacion date,
  tasaDeInteres float
);

CREATE TABLE Tipo_Cuenta (
  IDTipoCuenta int primary key identity (1,1)not null,
  nombre varchar(100) not null, 
);

CREATE TABLE Tipo_Moneda (
  IDTipoMoneda int primary key identity (1,1)not null,
  nombre varchar(100) not null,
);

CREATE TABLE Moneda (
  IDMoneda int primary key identity (1,1)not null,
  nombre varchar(100) not null,
  IDTipoMoneda int references Tipo_Moneda(IDTipoMoneda) not null,
  IDEstado int references Estado(IDEstado) not null
);

CREATE TABLE Cuenta (
  IDCuenta int primary key identity (1,1)not null,
  nombre varchar(100),
  fondo money,
  IDEstado int references Estado(IDEstado) not null,
  IDTipoCuenta int references Tipo_Cuenta(IDTipoCuenta) not null
);

	
CREATE TABLE Usuario (
  IDUsuario int primary key identity (1,1)not null,
  pass varchar(100) not null,
  nick varchar(100) not null,
  email varchar(100) not null,
  dniT varchar(100) not null,
  dniF varchar(100) not null,
  IDCuenta int references Cuenta(IDCuenta) not null,
  IDEstado int references Estado(IDEstado) not null
);


CREATE TABLE Operacion (
  IDOperacion int primary key identity (1,1)not null,
  nombre varchar(100),
  IDTipoOperacion int references Tipo_Operacion(IDTipoOperacion) not null,
  IDMoneda int references Moneda(IDMoneda),
  IDFactura int references Factura(IDFactura),
  IDEstado int references Estado(IDEstado) not null
);

CREATE TABLE Detalle_Operacion (
  IDDetOperacion int primary key identity (1,1)not null,
  hora time not null,
  fecha date not null,
  monto money not null,
  fechaEgreso date,
  IDOperacion int references Operacion(IDOperacion) not null,
  IDCuenta int references Cuenta(IDCuenta) not null
);

CREATE TABLE Sesion (
  IDSesion int primary key identity (1,1)not null,
  horaInicio time,
  horaFin time,
  fechaInicio date,
  fechaFin date,
  IDCuenta int references Cuenta(IDCuenta) not null,
  IDEstado int references Estado(IDEstado) not null
);




