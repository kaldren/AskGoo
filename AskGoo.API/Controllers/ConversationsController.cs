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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

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
            var conversation = await _context.Conversations.FirstOrDefaultAsync(x => x.Id == id);

            if (conversation == null)
            {
                return NotFound();
            }

            var conversationDto = new ConversationDto()
            {
                Id = conversation.Id,
                Author = await _context.Users
                            .Where(x => x.Id == conversation.AuthorId)
                            .Select(x => x.UserName).FirstOrDefaultAsync(),
                Content = conversation.Content,
                CreatedDate = conversation.CreatedDate
            };

            return Ok(conversationDto);
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
                    Author = await _context.Users
                                .Where(x => x.Id == conversation.AuthorId)
                                .Select(x => x.UserName)
                                .FirstOrDefaultAsync(),
                    Content = conversation.Content,
                    CreatedDate = conversation.CreatedDate
                });
            }

            return Ok(conversationDto);
        }

        [HttpPost("create")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> CreateNewMessage([FromBody] CreateConversationDto dto)
        {
            var loggedInUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            var recipientId = await _context.UserClaims
                                            .Where(x => x.ClaimType == "email" && x.ClaimValue == dto.Recipient)
                                            .Select(x => x.UserId)
                                            .SingleOrDefaultAsync();

            var conversationToDb = new Conversation
            {
                AuthorId = loggedInUserId,
                Content = dto.Content,
                RecipientId = recipientId
            };

            await _context.Conversations.AddAsync(conversationToDb);
            await _context.SaveChangesAsync();

            return Ok(conversationToDb);
        }
    }
}
