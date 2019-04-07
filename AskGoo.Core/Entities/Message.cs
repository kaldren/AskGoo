using System;
using System.Collections.Generic;
using System.Text;

namespace AskGoo.Core.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public ApplicationUser Author { get; set; }
        public ICollection<MessageUser> MessageUsers { get; set; }
    }
}
