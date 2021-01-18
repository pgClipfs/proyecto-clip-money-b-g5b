using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Operaciones
    {
        public int IDOperacion { get; set; }
        public TimeSpan Hora { get; set; }
        public string Nombre { get; set; }
        public decimal Monto { get; set; }

        public DateTime fechaoperacion { get; set; }
        public int IDCuenta { get; set; }
    }
}