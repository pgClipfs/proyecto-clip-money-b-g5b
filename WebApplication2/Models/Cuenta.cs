using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Cuenta
    {
        public int IDCuenta { get; set; }

        public string Nombre { get; set; }

        public decimal Fondo { get; set; }

        public int IdUsuario { get; set; }
    }

}