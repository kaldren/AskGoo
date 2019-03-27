using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AskGoo.API.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class IdentityController : ControllerBase
    {
        public IActionResult Get()
        {
            return Ok("NICE!");
            return new JsonResult(from c in User.Claims select new { c.Type, c.Value });
        }
    }

}
