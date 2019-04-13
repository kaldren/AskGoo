using System;
using System.Collections.Generic;
using System.Text;

namespace AskGoo.Core.Dtos
{
    public class CreateConversationDto
    {
        public string Recipient { get; set; }
        public string Content { get; set; }
    }
}
