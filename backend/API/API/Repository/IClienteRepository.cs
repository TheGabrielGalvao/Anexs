using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repository
{
    public interface IClienteRepository
    {
        public IEnumerable<Cliente> ListAll();
        public bool Save(Cliente cliente);
        public bool Delete(Cliente cliente);
    }
}
