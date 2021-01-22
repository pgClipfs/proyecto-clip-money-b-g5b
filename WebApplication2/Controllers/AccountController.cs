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
    [AllowAnonymous]
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        [HttpPost]
        [Route("modifyBalance")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult PostSaldo([FromBody] Usuario usuario, [FromBody] string nombreOperacion, [FromBody] decimal monto)
        {
            int idCuenta;
            int idUsuario;
            decimal saldo;
            GestorUsuario mUsuario = new GestorUsuario();
            idUsuario = mUsuario.ObtenerId(usuario);
            GestorCuenta gCuenta = new GestorCuenta();
            idCuenta = gCuenta.ObtenerIdCuenta(idUsuario);
            saldo = gCuenta.ModificarSaldo(idCuenta, nombreOperacion, monto);
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
