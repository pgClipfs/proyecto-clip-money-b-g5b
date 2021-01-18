using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using WebApplication2.Models;

using System.Data.SqlClient;

namespace WebApplication2.Models
{
    public class GestorLogin

        
    {

        private string StrConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
        LoginRequest loginRequest = new LoginRequest();
        public bool ValidarLogin(LoginRequest loginRequest)
        {
            string strConn = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();
            bool result = false;
            
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();


                SqlCommand comm = new SqlCommand("generar_login", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nick", loginRequest.Username));
                comm.Parameters.Add(new SqlParameter("@pass", loginRequest.Password));

                SqlDataReader reader = comm.ExecuteReader();

                if (reader.HasRows)
                {
                    result = true;
                }

            }
            return result;

        }

    }
}