using AskGoo.Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AskGoo.Data
{
    public class AskGooDbContext : IdentityDbContext<ApplicationUser>
    {
        public AskGooDbContext(DbContextOptions<AskGooDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            modelBuilder.Entity<MessageUser>()
                .HasKey(bc => new { bc.AuthorId, bc.RecipientId });
            modelBuilder.Entity<MessageUser>()
                .HasOne(bc => bc.Author)
                .WithMany(b => b.MessageUsers)
                .HasForeignKey(bc => bc.AuthorId);
            modelBuilder.Entity<MessageUser>()
                .HasOne(bc => bc.Recipient)
                .WithMany(c => c.MessageUsers)
                .HasForeignKey(bc => bc.RecipientId);
        }
    }
}
