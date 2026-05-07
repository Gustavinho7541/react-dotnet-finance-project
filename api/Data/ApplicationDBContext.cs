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
        public DbSet<Portfolio> Portfolios {get; set;}
        
        protected override void onModelCreating(ModelBuilder)
        {
            base.onModelCreating(builder);
            builder.Entity<Portfolio>(x => x.HasKey(p => new {p.AppUserId, p.StockId}));

            builder.Entity<Portfolio>()
              .HasOne(u => u.AppUser)
              .WithMany (u => u.Portfolios)
              .HasForeignKey(p => p.AppUserId);

            builder.Entity<Portfolio>()
              .HasOne(u => u.Stock)
              .WithMany (u => u.Portfolios)
              .HasForeignKey(p => p.StockId);
            

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