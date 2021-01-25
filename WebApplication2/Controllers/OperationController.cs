using System;
using System.Net;
using System.Threading;
using System.Web.Http;
using WebApplication2.Models;
using System.Web.Http.Cors;
using WebApplication2.Gestores;
using System.Collections.Generic;

namespace WebApplication2.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/operation")]
    public class OperationController : ApiController
    {
        [HttpPost]
        [Route("newOperation")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult PostNuevaOperacion(Operaciones nuevaOperacion)
        {
            GestorOperaciones gOperacion = new GestorOperaciones();
            switch (nuevaOperacion.NombreOperacion)
            {
                case "Extraccion":
                    nuevaOperacion = gOperacion.Extraer(nuevaOperacion);
                    break;
                case "Deposito":
                    nuevaOperacion = gOperacion.Deposito(nuevaOperacion);
                    break;
                case "Transferencia":
                    nuevaOperacion = gOperacion.Transferir(nuevaOperacion);
                    break;
                case "Giro al descubierto":
                    nuevaOperacion = gOperacion.GiroDescubierto(nuevaOperacion);
                    break;
                default:
                    break;
            }

            if (nuevaOperacion == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(nuevaOperacion);
            }
        }

        [HttpGet]
        [Route("getOperationList")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult GetOperationList([FromUri] int idUsuario)
        {
            GestorCuenta gcuenta = new GestorCuenta();
            int idCuenta = gcuenta.ObtenerIdCuenta(idUsuario);
            List<Operaciones> listaOperaciones = new List<Operaciones>();
            GestorOperaciones gOperaciones = new GestorOperaciones();
            listaOperaciones = gOperaciones.ListaOperaciones(idCuenta);
            if (listaOperaciones == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(listaOperaciones);
            }
        }
    }
}
