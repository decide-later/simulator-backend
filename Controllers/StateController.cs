using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using simulator_backend.Domain.Models;
using simulator_backend.Domain.Service;

namespace simulator_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private StateService Service;

        public StateController(StateService Service)
        {
            this.Service = Service;   
        }

        // GET api/state
        [HttpGet]
        public ActionResult<State> Get()
        {
            return this.Service.getCurrent();
        }

        // POST api/state
        [HttpPost]
        public void Post([FromBody] string value)
        {
            // TODO: deserialize JSON
            // instantiate post fields and transition object
            this.Service.transit();
        }
    }
}
