using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Modells
{
    public class Usuario
    {
        public int IDUsuario { get; set; }
        public string Pass { get; set; }
        public string Nick { get; set; }
        public string Email { get; set; }
        public string DniT { get; set; }
        public string DniF { get; set; }
        public int IDCuenta { get; set; }

        public virtual Cuenta Cuenta { get; set; }

        public Usuario()
        {
        }

        public Usuario(int idUsuario, string pass, string nick, string email, string dniT, string dniF)
        {
            IDUsuario = idUsuario;
            Pass = pass;
            Nick = nick;
            Email = email.ToLower();
            DniT = dniT;
            DniF = dniF;
        }
        public Usuario(int idUsuario, string pass, string nick)
        {
            IDUsuario = idUsuario;
            Pass = pass;
            Nick = nick;

        }
     
    }
}