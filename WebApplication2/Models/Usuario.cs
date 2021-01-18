using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Usuario
    {
        private int idusuario;

        private string pass;

        private string nick;

        private string email;

        private string nombre;

        private string apellido;

        private int dni;



        public Usuario(int idusuario, string pass, string nick, string email, string nombre, string apellido, int dni)
        {
            this.Idusuario = idusuario;
            this.pass = pass;
            this.Nick = nick;
            this.Email = email;
            this.Nombre = nombre;
            this.Apellido = apellido;
            this.Dni = dni;
        }
        public Usuario()
        {
        }

        public int Idusuario { get => idusuario; set => idusuario = value; }
        public string Pass { get => pass; set => pass = value; }
        public string Nick { get => nick; set => nick = value; }
        public string Email { get => email; set => email = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public int Dni { get => dni; set => dni = value; }








    }


    
}