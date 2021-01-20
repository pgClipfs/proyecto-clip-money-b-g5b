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
        public string ObtenerId(Usuario usuarioId)
        {
            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            string idTabla="";

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("obtener_id", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", usuarioId.Nick));
                comm.Parameters.Add(new SqlParameter("@pass", usuarioId.Pass));
                comm.Parameters.Add(new SqlParameter("@id", usuarioId.IDUsuario));
                SqlDataReader reader = comm.ExecuteReader();

                
            }
            return idTabla;
        }
        public void ModificarNick(Usuario usuarioModificado)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "modificar_nick";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", usuarioModificado.Nick));
                comm.ExecuteNonQuery();
            }

        }
        public void ModificarPass(Usuario usuarioModificado)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "modificar_pass";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", usuarioModificado.Pass));
                comm.ExecuteNonQuery();
            }

        }
        public void ModificarEmail(Usuario usuarioModificado)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "modificar_email";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@email", usuarioModificado.Email));
                comm.ExecuteNonQuery();
            }

        }
        public void ModificarNombre(Usuario usuarioModificado)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "modificar_nombre";
                comm.CommandType = System.Data.CommandType.StoredProcedure;              
                comm.Parameters.Add(new SqlParameter("@nombre", usuarioModificado.Nombre));
                comm.ExecuteNonQuery();
            }
            
        }

        public void ModificarApellido(Usuario usuarioModificado)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "modificar_apellido";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@apellido", usuarioModificado.Apellido));
                comm.ExecuteNonQuery();
            }

        }


    }
}