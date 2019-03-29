using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

[assembly: ApiConventionType(typeof(DefaultApiConventions))]
namespace AskGoo.API.Controllers
{
    /// <summary>
    /// Messages API
    /// </summary>
    public class MessagesController : ControllerBase
    {
        public MessagesController()
        {
        }
    }
}
