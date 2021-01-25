using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Operaciones
    {
        public int IDOperacion { get; set; }
        public string NombreOperacion { get; set; }
        public decimal Monto { get; set; }
        public DateTime FechaOperacion { get; set; }
        public int IDCuenta { get; set; }
        //public TimeSpan Hora { get; set; }
        //La hora no esta en la tabla y la podemos guardar en el datetime de la fecha
    }
}