using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data
{
    public class ApplicationDBContext : IdentityDbContext<AppUser>
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> dbContextOptions)
            : base(dbContextOptions)
        {
        }

        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }
        protected override void onModelCreating(ModelBuilder)
        {
            base.onModelCreating(builder);
            List<IdentityRole> roles = new List,IdentityRole>
            {
                new IdentityRole
                {
                   Name = "Admin",
                   NormalizedNam = "ADMIN"
                },

                 new IdentityRole
                {
                   Name = "Admin",
                   NormalizedNam = "USER"
                },
            };
            builder.Entity<IdentityRole>().HasData(roles);

        }
    }
}