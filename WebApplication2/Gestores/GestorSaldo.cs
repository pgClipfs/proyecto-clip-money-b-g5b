using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.Models;

namespace WebApplication2.Gestores
{
    public class GestorSaldo
    {
        public Usuario Usuario { get; set; }
        public string NombreOperacion { get; set; }
        public int Monto { get; set; }
        
        
    }
}