using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IClienteRepository _clienteRepository;

        public ClienteController(IClienteRepository clienteRepository)
        {
            _clienteRepository = clienteRepository;
        }

        [HttpGet]
        public IActionResult GetAllData()
        {
            try 
            {
                var data = _clienteRepository.ListAll();

                return Ok(data);
            }

            catch(Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

        [HttpPost]
        public IActionResult SetData([FromBody] Cliente cliente)
        {
            try
            {
                _clienteRepository.Save(cliente);

                return Ok();
            }

            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

        [HttpDelete]
        public IActionResult DeleteData([FromBody] Cliente cliente)
        {
            try
            {
                _clienteRepository.Delete(cliente);

                return Ok();
            }

            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }

    }
}