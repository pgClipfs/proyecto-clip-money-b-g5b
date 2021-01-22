using System;
using System.Net;
using System.Threading;
using System.Web.Http;
using WebApplication2.Models;
using System.Web.Http.Cors;

namespace WebApplication2.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
    }
}
