using Microsoft.AspNetCore.Mvc;

namespace Activity_5.Controllers
{
    public class PortfolioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
