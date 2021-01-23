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
        public int ObtenerId(Usuario usuario)
        {

            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            int idUsuario = 0;

            using (SqlConnection connec = new SqlConnection(strConn))
            {
                connec.Open();

                SqlCommand comm = new SqlCommand("obtener_id", connec);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", usuario.Nick));
                comm.Parameters.Add(new SqlParameter("@pass", usuario.Pass));

                idUsuario = Convert.ToInt32(comm.ExecuteScalar());

            }

            return idUsuario;
        }
        public int ObtenerIdPorLoguin(LoginRequest login)
        {
            
            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            int idUsuario;

            using (SqlConnection connec = new SqlConnection(strConn))
            {
                connec.Open();

                SqlCommand comm = new SqlCommand("obtener_id", connec);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", login.username));
                comm.Parameters.Add(new SqlParameter("@pass", login.password));

                idUsuario = Convert.ToInt32(comm.ExecuteScalar());                
             
            }
            return idUsuario;
        }
        public Usuario ObtenerUsuarioPorLogin(LoginRequest login)
        {

            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            Usuario usuario = new Usuario();

            using (SqlConnection connec = new SqlConnection(strConn))
            {
                connec.Open();

                SqlCommand comm = new SqlCommand("generar_login", connec);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", login.username));
                comm.Parameters.Add(new SqlParameter("@pass", login.password));


                SqlDataReader reader = comm.ExecuteReader();

                if (reader.Read())
                {
                    usuario.IDUsuario = reader.GetInt32(0);
                    usuario.Nick = reader.GetString(1);
                    usuario.Pass = reader.GetString(2);
                    usuario.Email = reader.GetString(3);
                    usuario.Nombre = reader.GetString(4);
                    usuario.Apellido = reader.GetString(5);
                    usuario.Dni = reader.GetInt32(6);
                }
                reader.Close();
            }

            return usuario;
        }

        public Usuario ModificarUsuario(Usuario usuarioModificado, int id)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            
            usuarioModificado.IDUsuario = id;
            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("modificar_usuario", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", usuarioModificado.IDUsuario));
                comm.Parameters.Add(new SqlParameter("@nick", usuarioModificado.Nick));
                comm.Parameters.Add(new SqlParameter("@pass", usuarioModificado.Pass));
                comm.Parameters.Add(new SqlParameter("@email", usuarioModificado.Email));
                comm.Parameters.Add(new SqlParameter("@nombre", usuarioModificado.Nombre));
                comm.Parameters.Add(new SqlParameter("@apellido", usuarioModificado.Apellido));
                comm.Parameters.Add(new SqlParameter("@dni", usuarioModificado.Dni));
                comm.ExecuteNonQuery();
               
            }

            return usuarioModificado;

        }

       
    }
}