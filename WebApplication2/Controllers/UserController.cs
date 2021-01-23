using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication2.Models;
using WebApplication2.Gestores;
using Amazon.EC2.Model;
using Hanssens.Net;

namespace WebApplication2.Controllers
{
    
    [AllowAnonymous]
    [RoutePrefix("api/register")]
    
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("newUser")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        
        public IHttpActionResult PostNuevo(Usuario usuario)
        {
            int id;
            GestorUsuario gUsuario = new GestorUsuario();
            id = gUsuario.AgregarUsuario(usuario);
            usuario.IDUsuario = id;
            if (usuario == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(usuario);
            }
        }
        //Hacer un get para obtener el id a traves de login 
        [HttpGet]
        [Route("getId")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult GetObtenerIdUsusario(LoginRequest login)
        {
            int id;
            GestorUsuario gUsuario = new GestorUsuario();
            id = gUsuario.ObtenerIdPorLoguin(login);
            
            if (id == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(id);
            }
        }

        [HttpGet]
        [Route("getUser")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult GetObtenerUsusario(LoginRequest login)
        {
            Usuario usuario = null;
            GestorUsuario gUsuario = new GestorUsuario();
            usuario = gUsuario.ObtenerUsuarioPorLogin(login);
            //var target = new LocalStorage(null);
            //Storage
                //(usuario.IDUsuario);

            if (usuario == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(usuario);
            }
        }

        //por mas que saque el id para modificar a travez del login igual tiene que enviar el nuevo usuario, capaz tenga que pasar en el metodo cmomo parametro las dos cosas 
       // en el get para recuperar el usuario me devuelve el id, tal vez haya que guardarlo en el local storag y ese pasarlo como parametro en el post para modificar
       // porque en realidad el nick y la pass son las que se pueden modificar y mno podemos pasar eso como parámetro no va a coincidir 
        [HttpPost]
        [Route("modifyUser")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult PostModificado(Usuario modificarUsuario)
        {
            
            int id = modificarUsuario.IDUsuario;
            GestorUsuario mUsuario = new GestorUsuario();
            modificarUsuario = mUsuario.ModificarUsuario(modificarUsuario, id);

            if (modificarUsuario == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(modificarUsuario);
            }
        }
    }
}
