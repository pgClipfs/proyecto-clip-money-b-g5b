USE [ClipMoney2]
GO
/****** Object:  StoredProcedure [dbo].[nuevo_usuario]    Script Date: 16/1/2021 3:21:32 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
--CREATE PROCEDURE <Procedure_Name, sysname, ProcedureName> 
--	-- Add the parameters for the stored procedure here
--	<@Param1, sysname, @p1> <Datatype_For_Param1, , int> = <Default_Value_For_Param1, , 0>, 
--	<@Param2, sysname, @p2> <Datatype_For_Param2, , int> = <Default_Value_For_Param2, , 0>
--AS
--BEGIN
--	-- SET NOCOUNT ON added to prevent extra result sets from
--	-- interfering with SELECT statements.
--	SET NOCOUNT ON;

    -- Insert statements for procedure here
	
CREATE PROCEDURE [dbo].[nuevo_usuario] @nick varchar(100), @pass varchar(100), @email varchar(200), @nombre varchar(100), @apellido varchar(100),@dni int
        AS
        INSERT INTO Usuario (nick, pass,email,nombre,apellido ,dni )  Values(
        @nick, @pass, @email,@nombre,@apellido,@dni)
		INSERT INTO Cuenta (nombre,fondo,IDUsuario) VALUES ('Cuenta Ahorro',100,@@Identity) 
		GO
		
	

