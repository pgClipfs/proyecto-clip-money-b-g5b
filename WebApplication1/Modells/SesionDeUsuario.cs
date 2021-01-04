using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Modells
{
    public class SesionDeUsuario
    {
        public SesionDeUsuario(string nombreDeUsuario, string token)
        {
            this.NombreDeUsuario = NombreDeUsuario;
            this.Token = token;
        }

        public string NombreDeUsuario { get; set; }
        public string Token { get; set; }
    }
}