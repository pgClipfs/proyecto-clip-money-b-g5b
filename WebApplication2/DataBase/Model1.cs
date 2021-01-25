using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace WebApplication2.DataBase
{
    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
        }

        public virtual DbSet<Cuenta> Cuenta { get; set; }
        public virtual DbSet<Operaciones> Operaciones { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cuenta>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            modelBuilder.Entity<Cuenta>()
                .Property(e => e.fondo)
                .HasPrecision(19, 4);

            modelBuilder.Entity<Cuenta>()
                .HasMany(e => e.Operaciones)
                .WithRequired(e => e.Cuenta)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Cuenta>()
                .HasMany(e => e.Usuario)
                .WithRequired(e => e.Cuenta)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Operaciones>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            modelBuilder.Entity<Operaciones>()
                .Property(e => e.monto)
                .HasPrecision(19, 4);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.pass)
                .IsUnicode(false);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.nick)
                .IsUnicode(false);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.email)
                .IsUnicode(false);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.dniT)
                .IsUnicode(false);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.dniF)
                .IsUnicode(false);
        }
    }
}
