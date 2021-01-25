﻿using System;
using System.Net;
using System.Threading;
using System.Web.Http;
using WebApplication2.Models;
using System.Web.Http.Cors;



namespace WebApplication2.Controllers
{
    /// <summary>
    /// login controller class for authenticate users
    /// </summary>
    
    [AllowAnonymous]
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        //Data Source=.\SQLExpress2019;Initial Catalog=ClipMoney2;Persist Security Info=True;User ID=ClipMoney;Password=proyectoclip
        [HttpGet]
        [Route("echoping")]
        public IHttpActionResult EchoPing()
        {
            return Ok(true);
        }

        [HttpGet]
        [Route("echouser")]
        public IHttpActionResult EchoUser()
        {
            var identity = Thread.CurrentPrincipal.Identity;
            return Ok($" IPrincipal-user: {identity.Name} - IsAuthenticated: {identity.IsAuthenticated}");
        }

        [HttpPost]
        [Route("authenticate")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]

        public IHttpActionResult Authenticate(LoginRequest login)
        {
            if (login == null)
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            GestorLogin gLogin = new GestorLogin();

            bool isCredentialValid = gLogin.ValidarLogin(login);

            if (isCredentialValid)
            {
                var token = TokenGenerator.GenerateTokenJwt(login.username);
                return Ok(new User(login.username, token));
            }
            else
            {
                return Unauthorized();
            }
        }

    }
}