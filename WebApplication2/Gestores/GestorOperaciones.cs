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
        public Operaciones Extraer(Operaciones extraer)
        {
            //Operaciones extraer = new Operaciones();
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            extraer.FechaOperacion = DateTime.Now;
            int idOperacion;

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "generar_operacion";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nombre", "Extraccion"));
                comm.Parameters.Add(new SqlParameter("@monto", extraer.Monto));
                comm.Parameters.Add(new SqlParameter("@fechaOperacion", extraer.FechaOperacion));
                comm.Parameters.Add(new SqlParameter("@idCuenta", extraer.IDCuenta));

                idOperacion = Convert.ToInt32(comm.ExecuteScalar());
                extraer.NombreOperacion = "Extraccion";
                extraer.IDOperacion = idOperacion;


            }
            return extraer;
        }

        public Operaciones Deposito(Operaciones ingresar)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            ingresar.FechaOperacion = DateTime.Now;
            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "generar_operacion";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nombre", "Deposito"));
                comm.Parameters.Add(new SqlParameter("@monto", ingresar.Monto));
                comm.Parameters.Add(new SqlParameter("@fechaOperacion", ingresar.FechaOperacion));
                comm.Parameters.Add(new SqlParameter("@idCuenta", ingresar.IDCuenta));

                ingresar.IDOperacion = Convert.ToInt32(comm.ExecuteScalar());
                ingresar.NombreOperacion = "Deposito";

            }
            return ingresar;

        }

        public Operaciones Transferir(Operaciones transferir)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            transferir.FechaOperacion = DateTime.Now;
            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "generar_operacion";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nombre", "Transferencia"));
                comm.Parameters.Add(new SqlParameter("@monto", transferir.Monto));
                comm.Parameters.Add(new SqlParameter("@fechaOperacion", transferir.FechaOperacion));
                comm.Parameters.Add(new SqlParameter("@idCuenta", transferir.IDCuenta));

                transferir.IDOperacion = Convert.ToInt32(comm.ExecuteScalar());
                transferir.NombreOperacion = "Transferencia";


            }
            return transferir;
        }

        public Operaciones GiroDescubierto(Operaciones giroDescubierto)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            giroDescubierto.FechaOperacion = DateTime.Now;
            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "generar_operacion";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nombre", "Giro al descubierto"));
                comm.Parameters.Add(new SqlParameter("@monto", giroDescubierto.Monto));
                comm.Parameters.Add(new SqlParameter("@fechaOperacion", giroDescubierto.FechaOperacion));
                comm.Parameters.Add(new SqlParameter("@idCuenta", giroDescubierto.IDCuenta));

                giroDescubierto.IDOperacion = Convert.ToInt32(comm.ExecuteScalar());
                giroDescubierto.NombreOperacion = "Giro al descubierto";

            }
            return giroDescubierto;
        }

        public List<Operaciones> ListaOperaciones (int idCuenta)
        {
            List<Operaciones> lista = new List<Operaciones>();
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "obtener_todas_operaciones";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idCuenta", idCuenta));

                SqlDataReader reader = comm.ExecuteReader();

                while (reader.Read())
                {
                    Operaciones operacion = new Operaciones();
                    operacion.IDOperacion = reader.GetInt32(0);
                    operacion.NombreOperacion = reader.GetString(1);
                    operacion.Monto = reader.GetDecimal(2);
                    operacion.FechaOperacion = reader.GetDateTime(3);
                    operacion.IDCuenta = idCuenta;
                    lista.Add(operacion);
                }
                reader.Close();
            }
            return lista;
        }

    }
}