﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class LoginRequest
    {
        private string username;
        private string password;
        public string Username { get => username; set => username = value; }
        public string Password { get=> password; set=>password = value; }
    }
}