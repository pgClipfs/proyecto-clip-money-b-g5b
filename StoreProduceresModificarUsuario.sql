-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE modificar_usuario @id int,  @nick varchar(100), @pass varchar(100), @email varchar(200), @nombre varchar(100), @apellido varchar(100),@dni int
 AS UPDATE Usuario SET Nick = @nick, Pass = @pass, Email = @email, Nombre = @nombre, Apellido= @apellido, Dni = @dni  
 WHERE IDUsuario = @id
 GO
