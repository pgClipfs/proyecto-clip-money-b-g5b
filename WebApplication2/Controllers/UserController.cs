using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication2.Models;
using WebApplication2.Gestores;


namespace WebApplication2.Controllers
{
    //[AllowAnonymous]
    [RoutePrefix("api/register")]
    public class UserController : ApiController
    {
        
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IEnumerable<Usuario> Get()
        {
            List<Usuario> lista = new List<Usuario>();
            return lista;
        }
        
        [HttpPost]
        [Route("newUser")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public Usuario Post(Usuario usuario)
        {
            int id;
            GestorUsuario gUsuario = new GestorUsuario();
            id = gUsuario.AgregarUsuario(usuario);
            usuario.IDUsuario = id;
            return usuario;
        }

    }
}
