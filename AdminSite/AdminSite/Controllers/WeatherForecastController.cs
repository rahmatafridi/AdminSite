using AdminSite.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace AdminSite.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private IHubContext<ConnectionHub> _hubContext;


        public WeatherForecastController(ILogger<WeatherForecastController> logger, 
            IHubContext<ConnectionHub> hubContext)
        {
            _logger = logger;
            _hubContext = hubContext;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var rng = new Random();
            var data = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
            //    _hubContext.Clients.All.SendAsync("GetNotification", CommonManager.NotificationService.GetNotification(note.To));

            return Ok(data);
        }

        [HttpPost]
        public IActionResult PostData()
        {
            var rng = new Random();
            var data = Enumerable.Range(1, 1).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
               _hubContext.Clients.All.SendAsync("PostWhetherData", data);

            return Ok();
        }

    }
}
