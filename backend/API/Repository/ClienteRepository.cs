using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace API.Repository
{
    public class ClienteRepository : IClienteRepository
    {
        private readonly string _connectionString;
        private MySqlConnection connection;

        public ClienteRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("MySQL");
            connection = new MySqlConnection(_connectionString);
        }

        public IEnumerable<Cliente> ListAll()
        {
            try
            {
                var data = connection.Query<Cliente>("SELECT * FROM cliente");

                return data;
            }
            catch(Exception ex)
            {
                throw;
            }
            
        }

        public bool Save(Cliente cliente)
        {
            connection = new MySqlConnection(_connectionString);

            try
            {
                if (cliente.Id > 0)
                {
                    connection.Execute(
                        "UPDATE cliente SET " +
                        "Nome = @Nome, " +
                        "CPF = @CPF, " +
                        "Email = @Email, " +
                        "CEP = @CEP, " +
                        "Rua = @Rua, " +
                        "Numero = @Numero, " +
                        "Cidade = @Cidade, " +
                        "Estado = @Estado " +
                        "WHERE Id = @Id", cliente);

                }
                else
                {
                    connection.Execute("INSERT INTO cliente (Nome,Email,CPF,Telefone,CEP,Rua,Numero,Cidade,Estado) " +
                        "values (@Nome,@Email,@CPF,@Telefone,@CEP,@Rua,@Numero,@Cidade,@Estado)", cliente);
                }

                return true;
            }
            
            catch(Exception ex)
            {
                throw;
            }
        }

        public bool Delete(int id)
        {
            try 
            {
                connection.Execute("DELETE FROM cliente WHERE Id = @Id", new {id = id });

                return true;
            }
            catch(Exception ex) 
            {
                throw;
            }
        }
    }
}
