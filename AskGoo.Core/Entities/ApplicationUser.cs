﻿using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace AskGoo.Core.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
