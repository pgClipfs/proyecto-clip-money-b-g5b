using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using WebApplication2.Models;

namespace WebApplication2.Gestores
{
    public class GestorCuenta
    {
        public int ObtenerId(int idUsuario)
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

        public int modificarSaldo(int idCuenta, Operaciones tipoOperacion)
        {

            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            int saldo;

            using (SqlConnection connec = new SqlConnection(strConn))
            {
                connec.Open();

                SqlCommand comm = new SqlCommand("modificar_saldo", connec);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idCuenta", idCuenta));

                saldo = 0;
                SqlDataReader reader = comm.ExecuteReader();

                if (reader.HasRows)
                {
                    saldo = reader.GetInt32(2);
                }

            }
            return saldo;
        }
    }
}