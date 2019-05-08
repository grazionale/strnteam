using Microsoft.EntityFrameworkCore;
using outroapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace outroapp.Repository
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options): base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("Host=localhost;Database=usuario;Username=postgres;Password=root");

        public DbSet<Usuario> Usuarios { get; set; }

    }
}
