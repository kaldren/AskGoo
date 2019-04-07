using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AskGoo.Core.Dtos;
using AskGoo.Core.Entities;
using AskGoo.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[assembly: ApiConventionType(typeof(DefaultApiConventions))]
namespace AskGoo.API.Controllers
{
    /// <summary>
    /// Messages API
    /// </summary>

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ConversationsController : ControllerBase
    {
        private readonly AskGooDbContext _context;

        public ConversationsController(AskGooDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetConversationById([FromRoute] Guid id)
        {
            var message = await _context.Conversations.FirstOrDefaultAsync(x => x.Id == id);

            if (message == null)
            {
                return NotFound();
            }

            return Ok(message);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllConversations()
        {
            var loggedInUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            var conversationList = await _context.Conversations
                .Where(x => x.RecipientId == loggedInUserId)
                .ToListAsync();

            var conversationDto = new List<ConversationDto>();

            foreach (var conversation in conversationList)
            {
                conversationDto.Add(new ConversationDto
                {
                    Id = conversation.Id,
                    Author = await _context.Users.Where(x => x.Id == conversation.AuthorId).Select(x => x.UserName).FirstOrDefaultAsync(),
                    Content = conversation.Content,
                    DateCreated = conversation.CreatedDate
                });
            }

            return Ok(conversationDto);
        }

        [HttpPost]
        public async Task<IActionResult> AddMessage()
        {
            var msg = new Conversation
            {
                AuthorId = "1a633c66-9418-4147-905c-caed4ddb5082",
                Content = "Hello, bro!",
                RecipientId = "176b888d-652c-4219-8b04-dae855ee08b5"
            };

            await _context.Conversations.AddAsync(msg);
            await _context.SaveChangesAsync();

            return Ok(msg);
        }
    }
}
