using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationTest.Controllers
{
    [ApiController]
    [Route("test")]

    public class WeatherForecastController : Controller
    {
        [HttpPost]
        [HttpGet]
        [Produces("application/json")]
        [Route("index")]

        public async Task<IActionResult> Index()
        {
            return this.Json(new { results = "Hello World!" });
        }

        [HttpPost]
        [HttpGet]
        [Produces("application/json")]
        [Route("hello_world")]

        public async Task<IActionResult> Test()
        {
            MyClassResponse res = new MyClassResponse();
            res.Success = "success";
            res.Result = "Hello World!!";
            res.Version = "1.0";
            return this.Json(res);
        }
    }
}
