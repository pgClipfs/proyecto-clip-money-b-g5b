using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using WebApplication2.Models;


namespace WebApplication2.Gestores
{
    public class GestorUsuario
    {

        public int AgregarUsuario(Usuario nuevoUsuario)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            int id = 0;
            

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "nuevo_usuario";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", nuevoUsuario.Nick));
                comm.Parameters.Add(new SqlParameter("@pass", nuevoUsuario.Pass));
                comm.Parameters.Add(new SqlParameter("@email", nuevoUsuario.Email));
                comm.Parameters.Add(new SqlParameter("@nombre", nuevoUsuario.Nombre));
                comm.Parameters.Add(new SqlParameter("@apellido", nuevoUsuario.Apellido));
                comm.Parameters.Add(new SqlParameter("@dni", nuevoUsuario.Dni));

                id = Convert.ToInt32(comm.ExecuteScalar());


            }
            return id;
        }

        public int ObtenerId(Usuario usuarioId)
        {
            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            int idUsuario = 0;

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("obtener_id", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", usuarioId.Nick));
                comm.Parameters.Add(new SqlParameter("@pass", usuarioId.Pass));
                
                SqlDataReader reader = comm.ExecuteReader();

                if (reader.HasRows)
                {
                    idUsuario = reader.GetInt32(0);
                }
            }
            return idUsuario;

        }
        //public void ModificarUsuario(int idAutogenerado)
        //{
        //    Usuario usuarioModificado = new Usuario();
        //    string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();

        //    using (SqlConnection conn = new SqlConnection(StrConn))
        //    {
        //        conn.Open();

        //        SqlCommand comm = conn.CreateCommand();
        //        comm.CommandText = "modificar_usuario";
        //        comm.CommandType = System.Data.CommandType.StoredProcedure;
        //        comm.Parameters.Add(new SqlParameter("@nick", usuarioModificado.Nick));
        //        comm.Parameters.Add(new SqlParameter("@pass", usuarioModificado.Pass));
        //        comm.Parameters.Add(new SqlParameter("@email", usuarioModificado.Email));
        //        comm.Parameters.Add(new SqlParameter("@nombre", usuarioModificado.Nombre));
        //        comm.Parameters.Add(new SqlParameter("@apellido", usuarioModificado.Apellido));
        //        comm.Parameters.Add(new SqlParameter("@dni", usuarioModificado.Dni));
        //        comm.ExecuteNonQuery();
        //    }

        //}


    }
}