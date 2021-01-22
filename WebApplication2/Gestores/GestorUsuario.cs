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

            using (SqlConnection connec = new SqlConnection(strConn))
            {
                connec.Open();

                SqlCommand comm = new SqlCommand("obtener_id", connec);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", usuarioId.Nick));
                comm.Parameters.Add(new SqlParameter("@pass", usuarioId.Pass));

                idUsuario = Convert.ToInt32(comm.ExecuteScalar());
                
            }

            return idUsuario;
        }

        //Creo que tal vez es mejor pasar el login con un objeto LoginRequest en vez del objeto usuario
        //No porque le paso un usuario al post de modificar en el controller
        //public int ObtenerId(LoginRequest loginRequest)
        //{
        //    
        //    string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
        //    int idUsuario = 0;

        //    using (SqlConnection conn = new SqlConnection(strConn))
        //    {
        //        conn.Open();

        //        SqlCommand comm = new SqlCommand("obtener_id", conn);
        //        comm.CommandType = System.Data.CommandType.StoredProcedure;
        //        comm.Parameters.Add(new SqlParameter("@nick", loginRequest.username));
        //        comm.Parameters.Add(new SqlParameter("@pass", loginRequest.password));

        //        SqlDataReader reader = comm.ExecuteReader();

        //        if (reader.HasRows)
        //        {
        //            idUsuario = reader.GetInt32(0);
        //        }
        //    }
        //    return idUsuario;
        //}
        public Usuario ModificarUsuario(Usuario usuarioModificado, int id)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            
            //Usuario usuarioModificado = new Usuario();

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