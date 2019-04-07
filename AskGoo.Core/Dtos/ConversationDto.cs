using System;
using System.Collections.Generic;
using System.Text;

namespace AskGoo.Core.Dtos
{
    public class ConversationDto
    {
        public Guid Id { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
