using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Mvc;
using WebApplication2.Models;


namespace WebApplication2.Gestores
{
    public class GestorCuenta
    {
        public int ObtenerIdCuenta(int idUsuario)
        {

            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            int idCuenta;

            using (SqlConnection connec = new SqlConnection(strConn))
            {
                connec.Open();

                SqlCommand comm = new SqlCommand("obtener_id_cuenta", connec);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idUsuario", idUsuario));


                idCuenta = Convert.ToInt32(comm.ExecuteScalar());
                
            }
            return idCuenta;
        }

        public decimal ObtenerSaldo(int idCuenta)
        {

            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            decimal saldo = 0 ;
            using (SqlConnection connec = new SqlConnection(strConn))
            {
                connec.Open();

                SqlCommand comm = new SqlCommand("obtener_saldo", connec);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idCuenta", idCuenta));

                SqlDataReader reader = comm.ExecuteReader();

                if (reader.Read())
                {
                    saldo = reader.GetDecimal(2);
                }

            }
            return saldo;
        }

        public decimal ModificarSaldo(int idCuenta, decimal monto, string nombreOperacion)
        {
            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            decimal nuevoSaldo = 0;
            decimal saldo = 0;

            using (SqlConnection connec = new SqlConnection(strConn))
            {
                connec.Open();

                SqlCommand comm = new SqlCommand("obtener_saldo", connec);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idCuenta", idCuenta));
                                
                SqlDataReader reader = comm.ExecuteReader();

                if (reader.Read())
                {
                    saldo = reader.GetDecimal(2);
                }

            }

            switch (nombreOperacion)
            {
                case "Extraccion": 
                    nuevoSaldo = saldo - monto;
                    break;
                case "Deposito":
                    nuevoSaldo = saldo + monto;
                    break;
                case "Transferencia":
                    nuevoSaldo = saldo - monto;
                    break;
                case "Giro al descubierto":
                    if (monto == (saldo * 0.10M))
                    {
                        nuevoSaldo = saldo - monto;
                    }
                    break;
                default:
                    nuevoSaldo = saldo;
                    break;
            }

            using (SqlConnection connec = new SqlConnection(strConn))
            {
                connec.Open();

                SqlCommand comm = new SqlCommand("modificar_saldo", connec);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idCuenta", idCuenta));
                comm.Parameters.Add(new SqlParameter("@saldo", nuevoSaldo));
                comm.ExecuteNonQuery();

            }
            return nuevoSaldo;
        }
    }
}