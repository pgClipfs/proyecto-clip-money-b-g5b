using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Usuario
    {
        public int IDUsuario { get; set; }

        public string Nick { get; set; }

        public string Pass { get; set; }

        public string Email { get; set; }

        public string Nombre { get; set; }

        public string Apellido { get; set; }

        public int Dni { get; set; }

        public Usuario(int iDUsuario, string pass, string nick, string email, string nombre, string apellido, int dni)
        {
            this.IDUsuario = iDUsuario;
            this.Nombre = nombre;
            this.Apellido = apellido;
            this.Pass = pass;
            this.Nick = nick;
            this.Email = email;
            this.Dni = dni;
        }
    }


    
}