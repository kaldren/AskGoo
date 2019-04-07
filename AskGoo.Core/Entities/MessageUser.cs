using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AskGoo.Core.Entities
{
    public class MessageUser
    {
        [ForeignKey(name: "Id")]
        public string AuthorId { get; set; }
        public ApplicationUser Author { get; set; }

        public int RecipientId { get; set; }
        public Message Recipient { get; set; }
    }
}
