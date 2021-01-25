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
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();

                using (SqlConnection conn = new SqlConnection(StrConn))
                {
                    conn.Open();

                    SqlCommand comm = conn.CreateCommand();
                    comm.CommandText = "generar_operacion";
                    comm.CommandType = System.Data.CommandType.StoredProcedure;
                    comm.Parameters.Add(new SqlParameter("@nombre", "Extraccion"));
                    comm.Parameters.Add(new SqlParameter("@monto", extraer.Monto));
                    comm.Parameters.Add(new SqlParameter("@fechaOperacion", extraer.FechaOperacion));
                    comm.Parameters.Add(new SqlParameter("@idCuenta", idCuenta));


                    extraer.IDOperacion = Convert.ToInt32(comm.ExecuteScalar());
                    extraer.NombreOperacion = "Extraccion";

                }
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