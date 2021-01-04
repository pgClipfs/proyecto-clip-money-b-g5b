using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Modells
{
    public class Cuenta
    {
        public int IDCuenta { get; set; }
        public string nombre { get; set; }
        public Nullable<decimal> fondo { get; set; }
    }
}