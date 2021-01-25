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
        [HttpGet]
        [Route("getBalance")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult GetSaldo ([FromUri]int idUsuario)
        {
            GestorCuenta gcuenta = new GestorCuenta();
            int idCuenta = gcuenta.ObtenerIdCuenta(idUsuario);
            decimal saldo = gcuenta.ObtenerSaldo(idCuenta);

            if (saldo == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(saldo);
            }
        }
        [HttpGet]
        [Route("idBalance")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult GetIdCuenta([FromUri] int idUsuario)
        {
            GestorCuenta gcuenta = new GestorCuenta();
            int idCuenta = gcuenta.ObtenerIdCuenta(idUsuario);

            if (idCuenta == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(idCuenta);
            }
        }
        //Necesito que el idCuenta que le paso con el get venga dentro del objeto operaciones

        [HttpPost]
        [Route("modifyBalance")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult PostSaldo(Operaciones nuevaOperacion)
        {
            GestorCuenta gCuenta = new GestorCuenta();
            int idCuenta = nuevaOperacion.IDCuenta;
            decimal saldo = gCuenta.ModificarSaldo(idCuenta, nuevaOperacion.Monto, nuevaOperacion.NombreOperacion);
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
