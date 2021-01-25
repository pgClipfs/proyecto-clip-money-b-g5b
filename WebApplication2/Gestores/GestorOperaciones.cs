using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using WebApplication2.Models;

namespace WebApplication2.Gestores
{
    public class GestorOperaciones
    {
        public Operaciones Extraer(int idCuenta)
        {
            Operaciones extraer = new Operaciones();


            return extraer;
        }

        public Operaciones Deposito(int idCuenta)
        {
            Operaciones ingresar = new Operaciones();

            return ingresar;
        }

        public Operaciones Transferir(int idCuenta)
        {
            Operaciones transferir = new Operaciones();

            return transferir;
        }

        public Operaciones GiroDescubierto(int idCuenta)
        {
            Operaciones giroDescubierto = new Operaciones();

            return giroDescubierto;
        }
    }
}