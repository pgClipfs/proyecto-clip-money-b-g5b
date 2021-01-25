namespace WebApplication2.DataBase
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Operaciones
    {
        [Key]
        public int IDOperacion { get; set; }

        public TimeSpan hora { get; set; }

        [Column(TypeName = "date")]
        public DateTime fecha { get; set; }

        [Required]
        [StringLength(100)]
        public string nombre { get; set; }

        [Column(TypeName = "money")]
        public decimal monto { get; set; }

        [Column(TypeName = "date")]
        public DateTime? fechaEgreso { get; set; }

        [Column(TypeName = "date")]
        public DateTime? fechaIngreso { get; set; }

        public int IDCuenta { get; set; }

        public virtual Cuenta Cuenta { get; set; }
    }
}
