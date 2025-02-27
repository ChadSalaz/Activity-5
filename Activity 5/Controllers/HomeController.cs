using System.Diagnostics;
using Activity_5.Models;
using Microsoft.AspNetCore.Mvc;

namespace Activity_5.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
    }
}
