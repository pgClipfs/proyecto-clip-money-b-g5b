using WebApplication1.Controllers;
using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Text.RegularExpressions;
using WebApplication1.Modells;
//using BCrypt.Net.BCrypt;


namespace WebApplication1.Modells
{
    public class GestorUsuario
    {
        
        private string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;

        public Usuario ObtenerPorCUILPassword(string Nick, string Pass)
        {
            Usuario usuario = new Usuario();

            SqlConnection conn = new SqlConnection(StrConn);
            conn.Open();

            string encryptedPassword = ServicioEncriptador.ComputeSha256Hash(Pass);

            SqlCommand comm = conn.CreateCommand();
            comm.CommandText = "SELECT * FROM USUARIOS WHERE CUIL=@Cuil AND CONTRASEÑA=@Password";
            comm.Parameters.Add(new SqlParameter("@Nick", Nick));
            comm.Parameters.Add(new SqlParameter("@Pass", encryptedPassword));

            SqlDataReader dr = comm.ExecuteReader();
            if (dr.Read())
            {
                int id = dr.GetInt32(0);
                string nombre = dr.GetString(2);
                string apellido = dr.GetString(3);

                usuario = new Usuario(id, nombre, apellido);
            }

            dr.Close();
            conn.Close();

            return usuario;
        }

        internal void VerificarContraseña(string contraseñaReq, string contraseñaDB)
        {

        }



        public bool RegistrarUsuario (Usuario usuario)
        {
            SqlConnection conn = new SqlConnection(StrConn);
            conn.Open();

            //string encryptedPassword = ServicioEncriptador.ComputeSha256Hash(usuario.Contraseña);
            //string passwordHash = BC.HashPassword(usuario.Pass);

            SqlCommand comm = conn.CreateCommand();
            comm.CommandText = @"INSERT INTO USUARIOS( IDUsuario, pass, nick, email )
                                output INSERTED.ID_USUARIO
                                values(@Nombre, @Apellido, @Clave )";

            comm.Parameters.Add(new SqlParameter("@ID", usuario.IDUsuario));
            comm.Parameters.Add(new SqlParameter("@Nick", usuario.Nick));
            comm.Parameters.Add(new SqlParameter("@Pass", usuario.Pass));
            comm.Parameters.Add(new SqlParameter("@Email", usuario.Email));

            int IdUsuario = (int)comm.ExecuteScalar();

            //Duda
            foreach (var photo in usuario.DniF)
            {
                SqlCommand commPhoto = conn.CreateCommand();
                commPhoto.CommandText = @"INSERT INTO USUARIOSxIMAGENES(RUTA, RAZON_IMAGEN, ID_USUARIO)
                                        values(@Ruta, @RazonImagen, @IdUsuario)";
                commPhoto.Parameters.Add(new SqlParameter("@Ruta", photo));
                commPhoto.Parameters.Add(new SqlParameter("@RazonImagen", "DNI"));
                commPhoto.Parameters.Add(new SqlParameter("@IdUsuario", IdUsuario));

                commPhoto.ExecuteNonQuery();

            }

            if (conn.State == System.Data.ConnectionState.Open)
                conn.Close();

            conn.Close();

            return true;
        }

        internal int registrarUsuario(Usuario usuario)
        {
            throw new NotImplementedException();
        }

        public void ValidarDatosUsuario(Usuario user)
        {
            Regex soloLetras = new Regex(@"^(\w+\s?)*\s*$"); // solo letras y 1 solo espacio
            Regex soloNumeros = new Regex("^[0-9]*$"); // solo letras y 1 solo espacio
            Regex tieneNumeros = new Regex(@"[0-9]+");
            Regex tieneMayusculas = new Regex(@"[A-Z]+");
            Regex longitudMinimaMaxima = new Regex(@".{8,15}");
            Regex tieneMinisculas = new Regex(@"[a-z]+");
            Regex tieneSimbolos = new Regex(@"[!@#$%^&*()_+=\[{\]};:<>|./?,-]");

            if (user.Nick.Length == 0 || !soloLetras.IsMatch(user.Nick))
            {
                throw new FormatException("Nombre de usuario incorrecto");
            }


            if (!RUtilities.IsValidEmail(user.Email))
            {
                throw new FormatException("El mail tiene formato incorrecto");
            }

        }

        internal int consultarCredencialesUsuario(string nombreUsuario, string contraseña)
        {

            throw new NotImplementedException();
        }
    }
}