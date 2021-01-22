using System;
using System.Net;
using System.Threading;
using System.Web.Http;
using WebApplication2.Models;
using System.Web.Http.Cors;
using WebApplication2.Gestores;

namespace WebApplication2.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        [HttpPost]
        [Route("modifyBalance")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult PostSaldo(Usuario usuario, Operaciones nombreOperacion)
        {
            int idCuenta;
            decimal saldo;
            int idUsuario = usuario.IDUsuario;
            GestorCuenta gCuenta = new GestorCuenta();
            idCuenta = gCuenta.ObtenerIdCuenta(idUsuario);
            saldo = gCuenta.ModificarSaldo(idCuenta, nombreOperacion);
            if (saldo == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(saldo);
            }
        }
    }
}
