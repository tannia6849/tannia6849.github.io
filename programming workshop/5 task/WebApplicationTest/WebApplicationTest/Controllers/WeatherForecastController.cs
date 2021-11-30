using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationTest.Requests;

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
        [Route("get_square")]

        public async Task<IActionResult> GetSquare()
        {
            WebApplicationRequest request = new WebApplicationRequest(this.Request);

            double square = 0.5 * request.A * request.H;
            MyClassResponse res = new MyClassResponse();
            res.Success = "success";
            res.Version = "1.0";
            res.Result = square;
            return this.Json(res);
        }
    }
}
