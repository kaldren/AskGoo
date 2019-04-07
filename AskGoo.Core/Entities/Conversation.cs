using System;
using System.Collections.Generic;
using System.Text;

namespace AskGoo.Core.Entities
{
    public class Conversation
    {
        public Guid Id { get; set; }
        public string Content { get; set; }
        public string AuthorId { get; set; }
        public string RecipientId { get; set; }
        public DateTime CreatedDate { get; set; }


        public Conversation()
        {
            CreatedDate = DateTime.UtcNow;
        }
    }
}
