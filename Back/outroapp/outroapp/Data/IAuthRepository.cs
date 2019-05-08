using outroapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace outroapp.Data
{
    public interface IAuthRepository
    {

        Task<Usuario> Register(Usuario user, string password);

        Task<Usuario> Login(string username, string password);

        Task<bool> UsuarioExists(string username);



    }
}
