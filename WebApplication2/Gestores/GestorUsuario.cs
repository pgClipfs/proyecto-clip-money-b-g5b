using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Configuration;
using System.Security.Claims;

using WebApplication2.Models;


namespace WebApplication2.Gestores
{
    public class GestorUsuario
    {
        public int AgregarUsuario(Usuario nuevo)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            int id = 0;

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "nuevo_usuario";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@pass", nuevo.Pass));
                comm.Parameters.Add(new SqlParameter("@nick", nuevo.Nick));
                comm.Parameters.Add(new SqlParameter("@email", nuevo.Email));
                comm.Parameters.Add(new SqlParameter("@nombre", nuevo.Nombre));
                comm.Parameters.Add(new SqlParameter("@apellido", nuevo.Apellido));
                comm.Parameters.Add(new SqlParameter("@dni", nuevo.Dni));

                id = Convert.ToInt32(comm.ExecuteScalar());
            }
            return id;
        }

        //    public List<Usuario> ObtenerUsuarios()
        //    {
        //        List<Usuario> lista = new List<Usuario>();
        //        string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();

        //        using (SqlConnection conn = new SqlConnection(StrConn))
        //        {
        //            conn.Open();

        //            SqlCommand comm = conn.CreateCommand();
        //            comm.CommandText = "obtener_usuarios";
        //            comm.CommandType = System.Data.CommandType.StoredProcedure;

        //            SqlDataReader dr = comm.ExecuteReader();
        //            while (dr.Read())
        //            {
        //                int id = dr.GetInt32(0);
        //                string email = dr.GetString(1).Trim();
        //                string password = dr.GetString(2).Trim();
        //                string estado = dr.GetString(3);

        //                Usuario p = new Usuario(id, email, password, estado);
        //                lista.Add(p);
        //            }

        //            dr.Close();
        //        }

        //        return lista;
        //    }

        //    public void Eliminar(int id)
        //    {
        //        string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

        //        using (SqlConnection conn = new SqlConnection(StrConn))
        //        {
        //            conn.Open();

        //            SqlCommand comm = new SqlCommand("deleteUsuario", conn);
        //            comm.CommandType = System.Data.CommandType.StoredProcedure;
        //            comm.Parameters.Add(new SqlParameter("@Id", id));

        //            comm.ExecuteNonQuery();
        //        }

        //    }


        //    public Usuario ObtenerPorId(int id)
        //    {
        //        Usuario p = null;
        //        string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

        //        using (SqlConnection conn = new SqlConnection(StrConn))
        //        {
        //            conn.Open();

        //            SqlCommand comm = new SqlCommand("obtener_usuario", conn);
        //            comm.CommandType = System.Data.CommandType.StoredProcedure;
        //            comm.Parameters.Add(new SqlParameter("@id", id));

        //            SqlDataReader dr = comm.ExecuteReader();
        //            if (dr.Read())
        //            {
        //                string nombre = dr.GetString(1);
        //                string apellido = dr.GetString(2);
        //                string dni = dr.GetString(3);
        //                string fechaNacimiento = dr.GetString(6);
        //                string cuil_cuit = dr.GetString(7);

        //                p = new Usuario(id, nombre, apellido, dni, fechaNacimiento, cuil_cuit);
        //            }
        //            dr.Close();
        //        }
        //        return p;
        //    }


        //    public void ModificarUsuario(Usuario p)
        //    {
        //        string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

        //        using (SqlConnection conn = new SqlConnection(StrConn))
        //        {
        //            conn.Open();

        //            SqlCommand comm = conn.CreateCommand();
        //            comm.CommandText = "update_Usuario";
        //            comm.CommandType = System.Data.CommandType.StoredProcedure;
        //            comm.Parameters.Add(new SqlParameter("@nombre", p.Nombre));
        //            comm.Parameters.Add(new SqlParameter("@apellido", p.Apellido));
        //            comm.Parameters.Add(new SqlParameter("@dni", p.Dni));
        //            comm.Parameters.Add(new SqlParameter("@fechaNacimiento", p.FechaNacimiento));
        //            comm.Parameters.Add(new SqlParameter("@cuil_cuit", p.Cuil_Cuit));
        //            comm.Parameters.Add(new SqlParameter("@Id", p.Id));

        //            comm.ExecuteNonQuery();
        //        }
        //    }
    }
}
