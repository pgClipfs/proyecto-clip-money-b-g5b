using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Modells
{
    public class LoginRequest
    {
        private string nick;
        private string password;

        public string Nick { get => nick; set => nick = value; }

        public string Password { get => password; set => password= value; }
    }
}