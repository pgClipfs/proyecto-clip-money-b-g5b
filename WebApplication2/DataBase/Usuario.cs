namespace WebApplication2.DataBase
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Usuario")]
    public partial class Usuario
    {
        [Key]
        public int IDUsuario { get; set; }

        [Required]
        [StringLength(100)]
        public string pass { get; set; }

        [Required]
        [StringLength(100)]
        public string nick { get; set; }

        [Required]
        [StringLength(100)]
        public string email { get; set; }

        [Required]
        [StringLength(100)]
        public string dniT { get; set; }

        [Required]
        [StringLength(100)]
        public string dniF { get; set; }

        public int IDCuenta { get; set; }

        public virtual Cuenta Cuenta { get; set; }
    }
}
